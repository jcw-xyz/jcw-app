import React from 'react';

export default function Content({ children }: { children: any }) {
    return (
        <div className='h-screen px-4 pt-20 pb-24 overflow-y-scroll scrolling-touch'>
            {children}
        </div>
    );
}
