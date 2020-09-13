import { takeLatest, put, call, select } from 'redux-saga/effects';
import axios from 'axios';
import actions from './apiActions';
import { SUCCESS, FAILED, ERROR } from './constant';

const cors: string = 'https://cors-anywhere.herokuapp.com/';
const url: string = 'https://prohashing.com/';

function* getImgUrl() {
    try {
        const { status, data } = yield call(axios.get, cors + url + 'coin/images');

        if (status === 200) {
            yield put({
                type: actions.FETCH_IMG_SUCC,
                img_url: data,
                status_code: SUCCESS,
            });
            return;
        }

        yield put({
            type: actions.FETCH_IMG_FAILED,
            status_code: FAILED,
        });
    } catch (e) {
        yield put({
            type: actions.FETCH_IMG_FAILED,
            status_code: ERROR,
        });
    }
}

function* getPoolDebt() {
    try {
        const { status, data } = yield call(axios.get, cors + url + 'statusPoolDebt');
        if (status === 200) {
            yield put({
                type: actions.FETCH_POOL_DEBT_SUCC,
                pool_debt: data,
                status_code: SUCCESS,
            });
            return;
        }
    } catch (e) {
        yield put({
            type: actions.FETCH_POOL_DEBT_FAILED,
            status_code: ERROR,
        });
    }
}

function* getReport() {
    const state = yield select((state) => state.api.date);
    try {
        const { status, data } = yield call(
            axios.get,
            cors + url + `maintenance/profit?startDate=${state}`
        );
        if (status === 200) {
            yield put({
                type: actions.FETCH_REPORT_SUCC,
                report: data,
                status_code: SUCCESS,
            });
            return;
        }
        yield put({
            type: actions.FETCH_REPORT_FAILED,
            status_code: FAILED,
        });
    } catch (e) {
        yield put({
            type: actions.FETCH_REPORT_FAILED,
            status_code: ERROR,
        });
    }
}

export function* apiSaga() {
    yield takeLatest(actions.FETCH_IMG, getImgUrl);
    yield takeLatest(actions.FETCH_POOL_DEBT, getPoolDebt);
    yield takeLatest(actions.FETCH_REPORT, getReport);
}
