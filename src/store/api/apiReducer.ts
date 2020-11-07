import actions from './apiActions';

const defaultState = {};
export function apiReducer(state = defaultState, action: any) {
    switch (action.type) {
        case actions.FETCH_IMG:
            return Object.assign({}, state, action);

        case actions.FETCH_IMG_SUCC:
            const { img_url } = action;
            return { ...state, img_url, status_code: action.status_code };

        case actions.FETCH_IMG_FAILED:
            return { ...state, status_code: action.status_code };

        case actions.FETCH_POOL_DEBT:
            return Object.assign({}, state, action);

        case actions.FETCH_POOL_DEBT_SUCC:
            const { pool_debt } = action;
            return { ...state, pool_debt, status_code: action.status_code };

        case actions.FETCH_POOL_DEBT_FAILED:
            return { ...state, status_code: action.status_code };

        case actions.FETCH_MINER_COUNT:
            return Object.assign({}, state, action);

        case actions.FETCH_MINER_COUNT_SUCC:
            const { miner_count } = action;
            return { ...state, miner_count, status_code: action.status_code };

        case actions.FETCH_MINER_COUNT_FAILED:
            return { ...state, status_code: action.status_code };

        case actions.FETCH_REPORT:
            return Object.assign({}, state, action);

        case actions.FETCH_REPORT_SUCC:
            const { report } = action;
            return { ...state, report, status_code: action.status_code };

        case actions.FETCH_REPORT_FAILED:
            return { ...state, status_code: action.status_code };

        default:
            return state;
    }
}
