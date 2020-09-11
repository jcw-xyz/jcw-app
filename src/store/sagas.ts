import { all } from 'redux-saga/effects';
import { wsSaga } from './ws/wsSaga';

export default function* rootSaga() {
    yield all([wsSaga()]);
}
