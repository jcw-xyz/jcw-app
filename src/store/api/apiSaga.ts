import { takeLatest, put, call } from 'redux-saga/effects';
import axios from 'axios';
import actions from './apiActions';
import { SUCCESS, FAILED, ERROR } from './constant';

function* getImgUrl() {
    try {
        const res = yield call(axios.get, 'coin/images');

        if (res.status === 200) {
            yield put({
                type: actions.FETCH_IMG_SUCC,
                img_url: res.data,
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

export function* apiSaga() {
    yield takeLatest(actions.FETCH_IMG, getImgUrl);
}
