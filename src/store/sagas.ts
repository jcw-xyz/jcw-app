import { all } from 'redux-saga/effects';
import { wsSaga } from './ws/wsSaga';

export default function* rootSaga() {
    console.log('rootSaga');
    yield all([wsSaga()]);
}
