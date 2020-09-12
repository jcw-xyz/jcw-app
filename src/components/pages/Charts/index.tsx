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
        <Content>
            <ul>
                <Card>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti praesentium
                    doloribus magni sit sequi voluptate molestias nam iusto deserunt consectetur
                    exercitationem voluptatem numquam a dignissimos, assumenda maiores, unde tempore
                    illo?
                </Card>
            </ul>
        </Content>
    );
}
