import React, { useState, useEffect } from 'react';
import _ from 'lodash';
import { useSelector, useDispatch } from 'react-redux';
import actions from '../../store/ws/wsActions';
import { RootState } from '../../types';

export default function ConnectWS({ children }: { children: any }) {
    const connection: any = useSelector<RootState>((state) => state.ws.connection);
    const profitability: any = useSelector<RootState>((state) => state.ws.profitability);
    const dispatch = useDispatch();
    const [incoming, setIncoming] = useState();
    useEffect(() => {
        dispatch({
            type: actions.CONNECT,
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
                    type: actions.UPDATE_SYSTEM_STATUS,
                    system_status: [subscriptions_count, block_template_count],
                });

                dispatch({
                    type: actions.UPDATE_HASHRATE,
                    hashrate: { ...total_hashrate_with_defaults },
                });
            });
            return () => {
                connection.removeAllListeners();
            };
        }
    }, [connection]);

    useEffect(() => {
        dispatch({
            type: actions.UPDATE_PROFIBILITY,
            profitability: _.unionBy(incoming, profitability, 'algorithm_name'),
        });
    }, [incoming]);

    return <>{children}</>;
}
