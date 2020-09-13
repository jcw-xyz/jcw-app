import React, { useEffect } from 'react';
import { Content } from '../../core';
import { useDispatch, useSelector } from 'react-redux';
import apiActions from '../../../store/api/apiActions';
import { RootState } from '../../../types';

export default function Report() {
    const dispatch = useDispatch();
    const report: any = useSelector<RootState>((state) => state.api.report);
    useEffect(() => {
        dispatch({
            type: apiActions.FETCH_REPORT,
            date: new Date().getTime(),
        });
    }, [dispatch]);

    return (
        <Content>
            <table className='text-xs text-left'>
                <thead className='text-app_gray'>
                    <tr>
                        <th>Coin Name</th>
                        <th>Reward Sum</th>
                        <th>Mined Value</th>
                        <th>Exchange Value</th>
                        <th>Owed Value</th>
                        <th>Owed</th>
                        <th>Mined coin earning Value</th>
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
                                <tr key={coin_id} className='text-app_ivory'>
                                    <th>{coin_name}</th>
                                    <th>{reward_sum}</th>
                                    <th>{mined_value}</th>
                                    <th>{exchanged_value}</th>
                                    <th>{owed_value}</th>
                                    <th>{owed}</th>
                                    <th>{mined_coin_earnings_value}</th>
                                </tr>
                            )
                        )}
                </tbody>
            </table>
        </Content>
    );
}
