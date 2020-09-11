import React from 'react';
import { Content, Card } from '../../core';

export default function RecentBlocks() {
    return (
        <Content>
            <ul>
                <Card className='flex'>
                    <div className='flex flex-col items-center w-1/4 h-full lg:w-1/5'>
                        <div className='w-12 h-12 lg:w-16 lg:h-16'>
                            <img
                                className='object-contain'
                                src='https://images.prohashing.com/coins/223.png'
                                alt='coin'
                            />
                        </div>
                        <div className='mt-2'>
                            <h1 className='font-medium text-app_ivory'>Pesetacoin</h1>
                            <span className='text-app_gray'>Scrypt</span>
                        </div>
                    </div>
                    <div className='w-3/4 h-full bg-blue-600 lg:w-4/5'>123</div>
                </Card>
            </ul>
        </Content>
    );
}
