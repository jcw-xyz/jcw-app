import React, { useEffect, useState } from 'react';
import { Content } from '../../core';
import { useDispatch, useSelector } from 'react-redux';
import apiActions from '../../../store/api/apiActions';
import { RootState } from '../../../types';
import Row from './Row';

export default function Report() {
    const dispatch = useDispatch();
    const report: any = useSelector<RootState>((state) => state.api.report);
    const [date] = useState(new Date());
    useEffect(() => {
        dispatch({
            type: apiActions.FETCH_REPORT,
            date: date.getTime(),
        });
    }, [dispatch, date]);

    return (
        <Content className='pt-10'>
            <h1 className='pt-8 pl-4 text-2xl font-medium'>
                Daily Pool Profit -{' '}
                {` ${date.getMonth() + 1}.${date.getDate()}.${date.getFullYear()}`}
            </h1>
            {report ? (
                <table className='relative w-full mx-4 text-xs text-left table-auto lg:text-base'>
                    <thead className='text-app_gray'>
                        <tr>
                            <th className='sticky top-0 pt-4 bg-black'>Coin Name</th>
                            <th className='sticky top-0 pt-4 pl-4 bg-black'>Mined</th>
                            <th className='sticky top-0 pt-4 pl-4 bg-black'>PnL%</th>
                        </tr>
                    </thead>
                    <tbody>
                        {report &&
                            report.map(
                                ({
                                    coin_name,
                                    coin_id,
                                    reward_sum,
                                    fees_sum,
                                    mined_value,
                                    exchanged_value,
                                    owed_value,
                                    owed,
                                    mined_coin_earnings_value,
                                    mined_coin_earnings,
                                    projected_orphan_rate,
                                    actual_orphan_rate,
                                    confirmed,
                                    orphaned,
                                    lost,
                                }: {
                                    coin_name: string;
                                    coin_id: number;
                                    reward_sum: number;
                                    fees_sum: number;
                                    mined_value: number;
                                    exchanged_value: number;
                                    owed_value: number;
                                    owed: number;
                                    mined_coin_earnings_value: number;
                                    mined_coin_earnings: number;
                                    projected_orphan_rate: number;
                                    actual_orphan_rate: number;
                                    confirmed: number;
                                    orphaned: number;
                                    lost: number;
                                }) => (
                                    <Row
                                        key={coin_id}
                                        coin_name={coin_name}
                                        coin_id={coin_id}
                                        reward_sum={reward_sum}
                                        fees_sum={fees_sum}
                                        mined_value={mined_value}
                                        exchanged_value={exchanged_value}
                                        owed_value={owed_value}
                                        owed={owed}
                                        mined_coin_earnings_value={mined_coin_earnings_value}
                                        mined_coin_earnings={mined_coin_earnings}
                                        projected_orphan_rate={projected_orphan_rate}
                                        actual_orphan_rate={actual_orphan_rate}
                                        confirmed={confirmed}
                                        orphaned={orphaned}
                                        lost={lost}
                                    />
                                )
                            )}
                    </tbody>
                </table>
            ) : (
                <h1 className='pt-8 text-center text-app_gray'>Generating report...</h1>
            )}
        </Content>
    );
}
