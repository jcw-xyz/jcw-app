import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import actions from '../../store/ws/wsActions';

export default function ConnectWS({ children }: { children: any }) {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch({
            type: actions.CONNECT,
        });
    }, []);

    return <>{children}</>;
}
