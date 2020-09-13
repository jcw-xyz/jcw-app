import { takeLatest, put } from 'redux-saga/effects';
import prohashing from 'prohashing-api';
import actions from './wsActions';

function* connectWS() {
    try {
        const connection = new prohashing({
            apiKey: '0a7a6fade943f7b6b9e96b4d1516bfcc733b5158af18d1b43aeec7e45a238c02',
            _debug: false,
            subscribe: 'all',
        });
        yield put({
            type: actions.CONNECT_SUCC,
            connection,
        });
    } catch (e) {
        console.log(e);
    }
}

export function* wsSaga() {
    yield takeLatest(actions.CONNECT, connectWS);
}
