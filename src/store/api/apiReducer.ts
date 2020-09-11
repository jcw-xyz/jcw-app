import actions from './apiActions';

const defaultState = {};
export function apiReducer(state = defaultState, action: any) {
    switch (action.type) {
        case actions.FETCH_IMG:
            return Object.assign({}, state, action);
        case actions.FETCH_IMG_SUCC:
            // eslint-disable-next-line no-case-declarations
            const { img_url, status_code } = action;
            return { ...state, img_url, status_code };
        default:
            return state;
    }
}
