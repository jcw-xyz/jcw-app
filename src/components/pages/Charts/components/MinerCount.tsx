import React, { useEffect } from 'react';
import { Card } from '../../../core';
import { Line } from 'react-chartjs-2';
import { useDispatch, useSelector } from 'react-redux';
import apiActions from '../../../../store/api/apiActions';
import { RootState } from '../../../../types';
import _ from 'lodash';

export default function MinerCount() {
    const dispatch = useDispatch();
    const miner_count: any = useSelector<RootState>((state) => state.api.miner_count);
    useEffect(() => {
        dispatch({
            type: apiActions.FETCH_MINER_COUNT,
        });
    }, [dispatch]);
    return (
        <Card>
            <Line
                data={{
                    labels: _.map(
                        _.map(miner_count, 'date').sort((a, b) => a - b),
                        (n) => {
                            const d = new Date(n);
                            return `${d.getMonth() + 1} / ${d.getDate()}`;
                        }
                    ),
                    datasets: [
                        {
                            label: 'Miner counts',
                            fill: false,
                            lineTension: 0.1,
                            backgroundColor: 'rgba(75,192,192,0.4)',
                            borderColor: 'rgba(75,192,192,1)',
                            borderCapStyle: 'butt',
                            borderDash: [],
                            borderDashOffset: 0.0,
                            borderJoinStyle: 'miter',
                            pointBorderColor: 'rgba(75,192,192,1)',
                            pointBackgroundColor: '#fff',
                            pointBorderWidth: 1,
                            pointHoverRadius: 5,
                            pointHoverBackgroundColor: 'rgba(75,192,192,1)',
                            pointHoverBorderColor: 'rgba(220,220,220,1)',
                            pointHoverBorderWidth: 2,
                            pointRadius: 1,
                            pointHitRadius: 10,
                            data: _.map(miner_count, 'miners'),
                        },
                    ],
                }}
                height={200}
                options={{
                    legend: { labels: { fontColor: '#F2ECE4' } },
                    maintainAspectRatio: true,
                    scales: {
                        yAxes: [
                            {
                                ticks: {
                                    fontColor: '#F2ECE4',
                                },
                            },
                        ],
                        xAxes: [
                            {
                                ticks: {
                                    fontColor: '#F2ECE4',
                                },
                            },
                        ],
                    },
                }}
            />
        </Card>
    );
}
