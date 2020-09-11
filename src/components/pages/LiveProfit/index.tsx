import React, { useEffect, useState, memo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import _ from 'lodash';
import { Content } from '../../core';
import { RootState } from '../../../types';
import actions from '../../../store/ws/wsActions';
import HashrateCard from './HashrateCard';

function LiveProfit() {
    const dispatch = useDispatch();
    const connection: any = useSelector<RootState>((state) => state.ws.connection);
    const hashrate: any = useSelector<RootState>((state) => state.ws.hashrate);
    const system: any = useSelector<RootState>((state) => state.ws.system_status);
    const profitability: any = useSelector<RootState>((state) => state.ws.profitability);
    const [incoming, setIncoming] = useState();

    useEffect(() => {
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
    }, []);

    useEffect(() => {
        dispatch({
            type: actions.UPDATE_PROFIBILITY,
            profitability: _.unionBy(incoming, profitability, 'algorithm_name'),
        });
    }, [incoming]);

    return (
        <Content>
            <div className='pl-4'>
                <h1 className='text-app_gray'>Connected workers</h1>
                <span className='text-2xl font-medium text-app_ivory'>{system && system[0]}</span>
                <h1 className='mt-2 text-app_gray'>Available blocks</h1>
                <span className='text-2xl font-medium text-app_ivory'>{system && system[1]}</span>
            </div>
            <ul className='mt-8'>
                {profitability &&
                    hashrate &&
                    profitability.map(
                        ({
                            algorithm_name,
                            usd,
                            btc,
                            max_usd,
                            max_btc,
                        }: {
                            algorithm_name: string;
                            usd: number;
                            btc: number;
                            max_usd: number;
                            max_btc: number;
                        }) => (
                            <HashrateCard
                                key={algorithm_name}
                                algorithm_name={algorithm_name}
                                usd={usd}
                                btc={btc}
                                max_usd={max_usd}
                                max_btc={max_btc}
                                hashrate={hashrate[algorithm_name] ? hashrate[algorithm_name] : 0}
                            />
                        )
                    )}
            </ul>
        </Content>
    );
}

export default memo(LiveProfit);
