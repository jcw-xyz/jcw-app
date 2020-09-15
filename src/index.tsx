import React, { Suspense, lazy } from 'react';
import ReactDOM from 'react-dom';
import { useRoutes, usePath, setBasepath } from 'hookrouter';
import { Provider } from 'react-redux';

import * as serviceWorker from './serviceWorker';

import store from './store';
import './styles/build/index.css';

import JavascriptTimeAgo from 'javascript-time-ago';
import en from 'javascript-time-ago/locale/en';

// import LoadingSpinner from './components/core/LoadingSpinner';
import { Header, Layout, Nav, Connect } from './components/layout';
import NotFound from './components/pages/NotFound';

const LiveProfit = lazy(() => import('./components/pages/LiveProfit'));
const RecentBlocks = lazy(() => import('./components/pages/RecentBlocks'));
const Charts = lazy(() => import('./components/pages/Charts'));
const Report = lazy(() => import('./components/pages/Report'));
const Dashbord = lazy(() => import('./components/pages/Dashboard'));

setBasepath('/jcw-app');

const routes = {
    '/': () => <LiveProfit />,
    '/blocks': () => <RecentBlocks />,
    '/charts': () => <Charts />,
    '/report': () => <Report />,
    '/dashboard': () => <Dashbord />,
};

function Root() {
    const routeResult = useRoutes(routes);
    const path = usePath();

    return (
        <Provider store={store}>
            <Connect>
                <Layout>
                    <Header path={path} />
                    <Suspense fallback={<></>}>{routeResult || <NotFound />}</Suspense>
                    <Nav />
                </Layout>
            </Connect>
        </Provider>
    );
}

ReactDOM.render(<Root />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
JavascriptTimeAgo.addLocale(en);
