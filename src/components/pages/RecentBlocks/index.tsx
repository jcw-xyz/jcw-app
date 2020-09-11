import React from 'react';
import { Content, Card } from '../../core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCube } from '@fortawesome/free-solid-svg-icons';

export default function RecentBlocks() {
    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    return (
        <Content>
            <ul>
                {arr.map((e) => (
                    <Card key={e} className='flex'>
                        <div className='float-left w-1/4 h-full ml-0 lg:w-1/5'>
                            <div className='w-12 h-12 lg:w-16 lg:h-16'>
                                <img
                                    className='object-contain'
                                    src='https://images.prohashing.com/coins/223.png'
                                    alt='coin'
                                />
                            </div>
                            <div className='mt-2'>
                                <h1 className='font-medium text-app_ivory'>Pesetacoin</h1>
                                <span className='text-xs text-app_gray lg:text-base'>Scrypt</span>
                            </div>
                        </div>
                        <div className='flex w-3/4 h-full ml-4 lg:ml-20 lg:w-4/5'>
                            <div className='w-1/3'>
                                <div>
                                    <span className='text-xs text-app_gray lg:text-base'>
                                        Miner
                                    </span>
                                    <h1 className='text-app_ivory'>tajanji</h1>
                                </div>
                                <div className='mt-2'>
                                    <span className='text-xs text-app_gray lg:text-base'>
                                        Value
                                    </span>
                                    <h1 className='to-app_ivory'>$ 0.0023</h1>
                                </div>
                            </div>
                            <div className='w-1/3 ml-1'>
                                <div>
                                    <span className='text-xs text-app_gray lg:text-base'>
                                        Block Reward
                                    </span>
                                    <h1 className='text-app_ivory'>0.005</h1>
                                </div>
                                <div className='mt-2'>
                                    <span className='text-xs text-app_gray lg:text-base'>
                                        Txn Fee
                                    </span>
                                    <h1 className='to-app_ivory'>0</h1>
                                </div>
                            </div>
                            <div className='w-1/3 mr-0 text-right'>
                                <div>
                                    <span className='text-xs text-app_gray lg:text-base'>
                                        Status
                                    </span>
                                    <h1 className='text-app_ivory'>Immature</h1>
                                </div>
                                <div className='mt-3'>
                                    <div className='text-xs text-app_gray lg:text-base'>
                                        <FontAwesomeIcon icon={faCube} />
                                        <span className='ml-1'>2,548,852</span>
                                    </div>
                                    <h1 className='text-app_ivory'>24 sec ago</h1>
                                </div>
                            </div>
                        </div>
                    </Card>
                ))}
            </ul>
        </Content>
    );
}
