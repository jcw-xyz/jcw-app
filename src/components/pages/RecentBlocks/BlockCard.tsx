import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../types';
import { Card } from '../../core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCube } from '@fortawesome/free-solid-svg-icons';
import ReactTimeAgo from 'react-time-ago';
import stringToFixed from '../../../utils/stringToFixed';
import _ from 'lodash';

export default function BlockCard({
    worker_name,
    coin_name,
    is_accepted,
    block_height,
    coinbase_value,
    transaction_fees,
    snapshot_value_usd,
    auxiliary,
    algorithm,
    is_stale,
    now,
}: {
    worker_name: string;
    coin_name: string;
    is_accepted: boolean;
    block_height: number;
    coinbase_value: string;
    transaction_fees: string;
    snapshot_value_usd: string;
    auxiliary: boolean;
    algorithm: string;
    is_stale: boolean;
    now: Date;
}) {
    const img_url: any = useSelector<RootState>((state) => state.api.img_url);
    const coin = _.find(img_url, ['name', coin_name]);
    const imgPath = `https://images.prohashing.com/coins/${coin.image_filename}`;

    return (
        <Card className='flex justify-between text-xs fade-in lg:text-base'>
            <div className='float-left w-1/5 h-full'>
                <div className='w-12 lg:w-16 lg:h-16'>
                    <img className='object-contain' src={imgPath} alt='coin' />
                </div>
                <div className='mt-3'>
                    <h1 className='font-medium truncate text-app_ivory'>{coin_name}</h1>
                    <span className=' text-app_gray'>{algorithm}</span>
                </div>
            </div>
            <div className='flex justify-between w-4/5 h-full ml-4'>
                <div className='w-1/3 ml-2'>
                    <div>
                        <span className=' text-app_gray'>Miner</span>
                        <h1 className='truncate text-app_ivory'>{worker_name}</h1>
                    </div>
                    <div className='mt-2'>
                        <span className=' text-app_gray'>Value</span>
                        <h1 className='to-app_ivory'>$ {stringToFixed(snapshot_value_usd, 3)}</h1>
                    </div>
                </div>
                <div className='w-1/3 ml-2'>
                    <div>
                        <span className=' text-app_gray'>Block Reward</span>
                        <h1 className='text-app_ivory'>{stringToFixed(coinbase_value, 3)}</h1>
                    </div>
                    <div className='mt-2'>
                        <span className=' text-app_gray'>Txn Fee</span>
                        <h1 className='to-app_ivory'>{stringToFixed(transaction_fees, 3)}</h1>
                    </div>
                </div>
                <div className='w-1/3 text-right'>
                    <div>
                        <span className='text-app_gray'>Status</span>
                        <h1 className='text-app_ivory'>
                            {is_accepted ? 'Accepted' : is_stale ? 'Stale' : 'Immature'}
                        </h1>
                    </div>
                    <div className='mt-6'>
                        <div className='text-app_gray'>
                            <FontAwesomeIcon icon={faCube} />
                            <span className='ml-1'>
                                {block_height.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                            </span>
                        </div>
                        <ReactTimeAgo className='text-app_ivory' date={now} />
                    </div>
                </div>
            </div>
        </Card>
    );
}
