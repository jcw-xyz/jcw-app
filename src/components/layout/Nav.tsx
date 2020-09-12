import React from 'react';
import { A } from 'hookrouter';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartLine, faChartPie, faCog, faFileAlt } from '@fortawesome/free-solid-svg-icons';

function Nav() {
    return (
        <div className='absolute bottom-0 left-0 z-10 w-full h-auto pb-4 overflow-hidden bg-app_dark'>
            <nav className='flex items-center justify-between px-8 pt-2 pb-5 text-2xl bg-app_dark text-app_ivory rounded-md'>
                <A href='/'>
                    <FontAwesomeIcon icon={faChartLine} />
                </A>
                <A href='/charts'>
                    <FontAwesomeIcon icon={faChartPie} />
                </A>
                <A href='/report'>
                    <FontAwesomeIcon icon={faFileAlt} />
                </A>
                <A href='/settings'>
                    <FontAwesomeIcon icon={faCog} />
                </A>
            </nav>
        </div>
    );
}

export default Nav;
