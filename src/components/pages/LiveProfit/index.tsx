import React, { memo } from 'react';
import { useSelector } from 'react-redux';
import { Content } from '../../core';
import { RootState } from '../../../types';
import HashrateCard from './HashrateCard';

function LiveProfit() {
    const hashrate: any = useSelector<RootState>((state) => state.ws.hashrate);
    const system: any = useSelector<RootState>((state) => state.ws.system_status);
    const profitability: any = useSelector<RootState>((state) => state.ws.profitability);

    return (
        <Content>
            {profitability && hashrate && system && (
                <>
                    <div className='pl-4'>
                        <h1 className='text-app_gray'>Connected workers</h1>
                        <span className='text-2xl font-medium text-app_ivory'>{system[0]}</span>
                        <h1 className='mt-2 text-app_gray'>Available blocks</h1>
                        <span className='text-2xl font-medium text-app_ivory'>{system[1]}</span>
                    </div>
                    <ul className='mt-8'>
                        {profitability.map(
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
                                    hashrate={
                                        hashrate[algorithm_name] ? hashrate[algorithm_name] : 0
                                    }
                                />
                            )
                        )}
                    </ul>
                </>
            )}
        </Content>
    );
}

export default memo(LiveProfit);
