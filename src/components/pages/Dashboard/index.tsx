import React from 'react';
import { Content, Card } from '../../core';

export default function Dashboard() {
    return (
        <Content className='pt-20'>
            <div>
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
                        No miners connected
                    </span>
                </Card>
            </div>
        </Content>
    );
}
