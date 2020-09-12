import actions from './wsActions';
import _ from 'lodash';

const defaultState = {
    blocks: [],
    profitability: [],
};
export function wsReducer(state = defaultState, action: any) {
    switch (action.type) {
        case actions.CONNECT:
            return Object.assign({}, state, action);
        case actions.CONNECT_SUCC:
            const { connection } = action;
            return { ...state, connection };
        case actions.UPDATE_PROFIBILITY:
            const { incoming } = action;
            const profitability = _.unionBy(incoming, state.profitability, 'algorithm_name');
            return { ...state, profitability };
        case actions.UPDATE_SYSTEM_STATUS:
            const { system_status } = action;
            return { ...state, system_status };
        case actions.UPDATE_HASHRATE:
            const { hashrate } = action;
            return { ...state, hashrate };
        case actions.RECENT_BLOCK:
            const { newBlocks } = action;
            const arr = _.map(newBlocks, (e) => {
                return _.extend({}, e, { now: new Date() });
            });
            const blocks = _.unionBy(arr, state.blocks, 'block_hash');
            return { ...state, blocks };
        default:
            return state;
    }
}
