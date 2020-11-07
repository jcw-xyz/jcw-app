import React, { useEffect } from 'react';
import { Card } from '../../../core';
import { Doughnut } from 'react-chartjs-2';
import { useDispatch, useSelector } from 'react-redux';
import apiActions from '../../../../store/api/apiActions';
import { RootState } from '../../../../types';
import _ from 'lodash';

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
                            backgroundColor: [
                                '#DBDAD9',
                                '#CF007B',
                                '#B3C8F2',
                                '#19D5DA',
                                '#36A2EB',
                                '#F25C05',
                                '#C1D0D9',
                                '#3F5765',
                                '#85BB65',
                                '#F1D179',
                            ],
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
