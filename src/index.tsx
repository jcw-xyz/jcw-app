import React, { Suspense, lazy } from 'react';
import ReactDOM from 'react-dom';
import { useRoutes, usePath } from 'hookrouter';
import { Provider } from 'react-redux';

import * as serviceWorker from './serviceWorker';

import store from './store';
import './styles/build/index.css';
import LoadingSpinner from './components/core/LoadingSpinner';
import { Header, Layout, Nav, ConnectWS } from './components/layout';
import NotFound from './components/pages/NotFound';
const LiveProfit = lazy(() => import('./components/pages/LiveProfit'));
const RecentBlocks = lazy(() => import('./components/pages/RecentBlocks'));
const Charts = lazy(() => import('./components/pages/Charts'));
const Search = lazy(() => import('./components/pages/Search'));
const Settings = lazy(() => import('./components/pages/Settings'));
const Profile = lazy(() => import('./components/pages/Profile'));

const routes = {
    '/': () => <LiveProfit />,
    '/blocks': () => <RecentBlocks />,
    '/charts': () => <Charts />,
    '/search': () => <Search />,
    '/settings': () => <Settings />,
    '/profile': () => <Profile />,
};

function Root() {
    const routeResult = useRoutes(routes);
    const path = usePath();
    return (
        <Provider store={store}>
            <ConnectWS>
                <Layout>
                    <Header path={path} />
                    <Suspense fallback={<LoadingSpinner />}>{routeResult || <NotFound />}</Suspense>
                    <Nav />
                </Layout>
            </ConnectWS>
        </Provider>
    );
}

ReactDOM.render(<Root />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
