import React, { useEffect } from 'react';
import { Content, Card } from '../../core';
import { useDispatch } from 'react-redux';
import apiActions from '../../../store/api/apiActions';

export default function Charts() {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch({
            type: apiActions.FETCH_POOL_DEBT,
        });
    }, [dispatch]);
    return (
        <Content className='pt-20'>
            <ul>
                <Card>under construction</Card>
            </ul>
        </Content>
    );
}
