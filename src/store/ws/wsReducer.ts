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
            // eslint-disable-next-line no-case-declarations
            const { connection } = action;
            return { ...state, connection };
        case actions.UPDATE_PROFIBILITY:
            // eslint-disable-next-line no-case-declarations
            const { incoming } = action;
            // eslint-disable-next-line no-case-declarations
            const profitability = _.unionBy(incoming, state.profitability, 'algorithm_name');
            return { ...state, profitability };
        case actions.UPDATE_SYSTEM_STATUS:
            // eslint-disable-next-line no-case-declarations
            const { system_status } = action;
            return { ...state, system_status };
        case actions.UPDATE_HASHRATE:
            // eslint-disable-next-line no-case-declarations
            const { hashrate } = action;
            return { ...state, hashrate };
        case actions.RECENT_BLOCK:
            // eslint-disable-next-line no-case-declarations
            const { newBlocks } = action;
            // eslint-disable-next-line no-case-declarations
            const blocks = _.unionBy(newBlocks, state.blocks, 'block_hash');
            return { ...state, blocks };
        default:
            return state;
    }
}
