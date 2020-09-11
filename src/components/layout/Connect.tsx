import React, { useState, useEffect } from 'react';
import _ from 'lodash';
import { useSelector, useDispatch } from 'react-redux';
import wsActions from '../../store/ws/wsActions';
import apiActions from '../../store/api/apiActions';
import { RootState } from '../../types';

export default function Connect({ children }: { children: any }) {
    const connection: any = useSelector<RootState>((state) => state.ws.connection);
    const profitability: any = useSelector<RootState>((state) => state.ws.profitability);
    const blocks: any = useSelector<RootState>((state) => state.ws.blocks);
    const dispatch = useDispatch();
    const [incoming, setIncoming] = useState();
    const [newBlocks, setNewBlocks] = useState();
    useEffect(() => {
        dispatch({
            type: apiActions.FETCH_IMG,
        });

        dispatch({
            type: wsActions.CONNECT,
        });
    }, []);

    useEffect(() => {
        if (connection) {
            connection.on('profitability', (update: any) => {
                const { ...rest } = update[0] ? update[0] : update;
                setIncoming(Object.values(rest));
            });
            connection.on('systemStatus', (update: any) => {
                const {
                    subscriptions_count,
                    block_template_count,
                    total_hashrate_with_defaults,
                } = update[0] ? update[0] : update;

                dispatch({
                    type: wsActions.UPDATE_SYSTEM_STATUS,
                    system_status: [subscriptions_count, block_template_count],
                });

                dispatch({
                    type: wsActions.UPDATE_HASHRATE,
                    hashrate: { ...total_hashrate_with_defaults },
                });
            });

            connection.on('block', (update: any) => {
                const new_blocks = update;
                setNewBlocks(new_blocks);
            });

            return () => {
                connection.removeAllListeners();
            };
        }
    }, [connection]);

    useEffect(() => {
        dispatch({
            type: wsActions.UPDATE_PROFIBILITY,
            profitability: _.unionBy(incoming, profitability, 'algorithm_name'),
        });
    }, [incoming]);

    useEffect(() => {
        dispatch({
            type: wsActions.RECENT_BLOCK,
            blocks: newBlocks && blocks ? _.unionBy(newBlocks, blocks, 'block_hash') : [],
        });
    }, [newBlocks]);

    return <>{children}</>;
}
