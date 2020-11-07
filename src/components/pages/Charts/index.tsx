import React, { lazy, Suspense } from 'react';
import { Content } from '../../core';
const MinerCount = lazy(() => import('./components/MinerCount'));
const PoolDebt = lazy(() => import('./components/PoolDebt'));

export default function Charts() {
    return (
        <Content className='pt-20'>
            <ul>
                <div>
                    <h1 className='pl-4 text-app_ivory'>Connected Miners</h1>

                    <Suspense fallback={<></>}>
                        <MinerCount />
                    </Suspense>
                </div>
                <div className='mt-8'>
                    <h1 className='pl-4 text-app_ivory'>Pool Debt</h1>
                    <Suspense fallback={<></>}>
                        <PoolDebt />
                    </Suspense>
                </div>
            </ul>
        </Content>
    );
}
