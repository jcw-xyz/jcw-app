import React, { useEffect } from 'react';
import { Card } from '../../../core';
import { Doughnut } from 'react-chartjs-2';
import { useDispatch, useSelector } from 'react-redux';
import apiActions from '../../../../store/api/apiActions';
import { RootState } from '../../../../types';
import _ from 'lodash';
import wordhex from 'wordhex';

export default function PoolDebt() {
    const dispatch = useDispatch();
    const pool_debt: any = useSelector<RootState>((state) => state.api.pool_debt);
    useEffect(() => {
        dispatch({
            type: apiActions.FETCH_POOL_DEBT,
        });
    }, [dispatch]);
    return (
        <Card>
            <Doughnut
                data={{
                    datasets: [
                        {
                            data: _.map(pool_debt, 'value'),
                            backgroundColor: _.map(_.map(pool_debt, 'value'), (elm) =>
                                wordhex(elm + '127340327')
                            ),
                            borderWidth: 0,
                        },
                    ],
                    labels: _.map(pool_debt, 'name'),
                }}
                height={300}
                options={{
                    legend: { labels: { fontColor: '#F2ECE4' } },
                    maintainAspectRatio: true,
                }}
            />
        </Card>
    );
}
