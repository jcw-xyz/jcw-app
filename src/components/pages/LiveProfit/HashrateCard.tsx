import React from 'react';
import { Card } from '../../core';
import hashrateUnitConverter from '../../../utils/hashrateUnitConverter';

function HashrateCard({
    algorithm_name,
    usd,
    btc,
    max_usd,
    max_btc,
    hashrate,
}: {
    algorithm_name: string;
    usd: number;
    btc: number;
    max_usd: number;
    max_btc: number;
    hashrate: number;
}) {
    const percent = Math.abs(usd / max_usd) * 100 >= 100 ? 100 : Math.abs(usd / max_usd) * 100;

    function isEquihashUSD(payout: number) {
        if (algorithm_name.includes('Equihash')) {
            return (payout / 10).toFixed(6);
        }
        return (payout * 100).toFixed(6);
    }

    function isEquihashBTC(payout: number) {
        if (algorithm_name.includes('Equihash')) {
            return (payout / 10).toFixed(12);
        }
        return (payout * 100).toFixed(12);
    }

    return (
        <Card>
            <div className='flex'>
                <div className='w-3/5'>
                    <h1 className='-mt-1 text-2xl font-medium'>{algorithm_name}</h1>
                    <span className='text-lg text-app_gray'>{hashrateUnitConverter(hashrate)}</span>
                </div>
                <div className='w-2/5 leading-tight text-right'>
                    <h1>{isEquihashUSD(max_usd)} ¢</h1>
                    <span className='text-xs text-app_gray'>{isEquihashBTC(max_btc)} BTC</span>
                </div>
            </div>
            <div className='mt-12'>
                <div className='w-auto h-4 rounded-md bg-app_ivory'>
                    <div
                        className={`relative h-4 ${
                            percent >= 70
                                ? 'bg-green-700 text-right'
                                : percent >= 30
                                ? 'bg-yellow-600 text-right'
                                : 'bg-red-700 text-left'
                        } rounded-md`}
                        style={{
                            width: `${percent}%`,
                        }}
                    >
                        <div
                            className={`absolute pt-1 -mt-12 leading-tight ${
                                percent < 30 ? 'left-0 w-64' : 'right-2 w-auto'
                            }`}
                        >
                            <h1>{isEquihashUSD(usd)} ¢</h1>
                            <span className='text-xs text-app_gray'>{isEquihashBTC(btc)} BTC</span>
                        </div>
                    </div>
                </div>
            </div>
        </Card>
    );
}

export default HashrateCard;
