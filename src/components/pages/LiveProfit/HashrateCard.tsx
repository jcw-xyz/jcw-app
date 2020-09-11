import React from 'react';
import { Card } from '../../core';
import hashrateUnitConverter from '../../../utils/hashrateUnitConverter';

const HashrateCard = ({
    algorithm_name,
    usd,
    btc,
    percentile_usd,
    percentile_btc,
    hashrate,
}: {
    algorithm_name: string;
    usd: number;
    btc: number;
    percentile_usd: number;
    percentile_btc: number;
    hashrate: number;
}) => (
    <Card>
        <div className='flex'>
            <div className='w-3/5'>
                <h1 className='-mt-1 text-2xl font-medium'>{algorithm_name}</h1>
                <span className='text-lg text-app_gray'>{hashrateUnitConverter(hashrate)}</span>
            </div>
            <div className='w-2/5 leading-tight text-right'>
                <h1>{(percentile_usd * 100).toFixed(3)} ¢</h1>
                <span className='text-xs text-app_gray'>{percentile_btc.toFixed(9)} BTC</span>
            </div>
        </div>
        <div className='mt-12'>
            <div className='w-full h-4 rounded-md bg-app_ivory'>
                <div className='relative w-64 h-4 text-right bg-green-700 rounded-md'>
                    <div className='absolute -mt-12 leading-tight right-2'>
                        <h1>{(usd * 100).toFixed(3)} ¢</h1>
                        <span className='text-xs text-app_gray'>{btc.toFixed(9)} BTC</span>
                    </div>
                </div>
            </div>
        </div>
    </Card>
);

export default HashrateCard;
