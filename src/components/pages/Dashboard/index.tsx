import React from 'react';
import { Content, Card } from '../../core';
import { useSelector } from 'react-redux';
import { RootState } from '../../../types';

export default function Dashboard() {
    const balance: any = useSelector<RootState>((state) => state.ws.balance);

    return (
        <Content className='pt-20'>
            <div>
                <h1 className='pl-4 text-app_ivory'> Enter API Key</h1>
                <Card className='flex items-center justify-between'>
                    <input
                        className='w-full pb-2 border-b outline-none bg-app_dark border-app_gray'
                        type='text'
                        placeholder='Enter api key to connect (please contact us if you need one)'
                    />
                    <button className='px-4 py-2 ml-4 border outline-none text-app_ivory focus:text-app_gray rounded-md border-app_gray focus:outline-none'>
                        Enter
                    </button>
                </Card>
            </div>
            <div className='mt-8'>
                <h1 className='pl-4 text-app_ivory'>Wallet Balance</h1>{' '}
                <div>
                    {balance.lenght > 0 ? (
                        <>
                            <Card></Card>
                            <Card></Card>
                            <Card></Card>
                        </>
                    ) : (
                        <Card className='text-center text-app_gray'>No balance found</Card>
                    )}
                </div>
            </div>
            <div className='mt-8'>
                <h1 className='pl-4 text-app_ivory'>Mining Status</h1>
                <Card className='py-20'>
                    <span className='block w-full text-center text-app_gray'>
                        No miners connected
                    </span>
                </Card>
            </div>
            <div className='mt-8'>
                <h1 className='pl-4 text-app_ivory'>Account Activity</h1>
                <Card className='py-20'>
                    <span className='block w-full text-center text-app_gray'>
                        No recent activities
                    </span>
                </Card>
            </div>

            <div className='pl-4 mt-8'>
                <h1 className='text-app_ivory'>Support</h1>
                <p className='py-8'>
                    You can reach us at{' '}
                    <a href='mailto:support@jcwmining.xyz' className='underline'>
                        support@jcwmining.xyz
                    </a>
                </p>
            </div>
        </Content>
    );
}
