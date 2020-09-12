import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import wsActions from '../../store/ws/wsActions';
import apiActions from '../../store/api/apiActions';
import { RootState } from '../../types';

export default function Connect({ children }: { children: any }) {
    const connection: any = useSelector<RootState>((state) => state.ws.connection);
    const dispatch = useDispatch();
    const [incoming, setIncoming] = useState([]);
    const [newBlocks, setNewBlocks] = useState([]);
    useEffect(() => {
        dispatch({
            type: apiActions.FETCH_IMG,
        });

        dispatch({
            type: wsActions.CONNECT,
        });
    }, [dispatch]);

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
    }, [dispatch, connection]);

    useEffect(() => {
        dispatch({
            type: wsActions.UPDATE_PROFIBILITY,
            incoming,
        });
    }, [dispatch, incoming]);

    useEffect(() => {
        dispatch({
            type: wsActions.RECENT_BLOCK,
            newBlocks,
        });
    }, [dispatch, newBlocks]);

    return <>{children}</>;
}
