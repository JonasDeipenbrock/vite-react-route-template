import { LinearProgress } from '@mui/material';
import React from 'react';
import { Route, Routes } from 'react-router';
import { WithChildren } from '../models/typehelpers';
import StyledErrorBoundary from './ErrorBoundary/StyledErrorBoundary';
import Nav from './Navigation/Layout';

/**
 * Wrap a route with lazy loading and Fallback
 */
const RouteWithFallbackBoundary = (props: WithChildren) => {
    return (
        <StyledErrorBoundary>
            <React.Suspense fallback={<LinearProgress />}>
                {props.children}
            </React.Suspense>
        </StyledErrorBoundary>
    );
};

/**
 * Definition of all routes with lazy loading
 */
const APP_ROUTES = {
    home: {
        path: '/',
        component: React.lazy(() => import('./PageDefinitions/HomePage'))
    },
    history: {
        path: 'history',
        component: React.lazy(() => import('./PageDefinitions/HistoryPage'))
    }
};

/**
 * Main content including routes
 */
const Main = () => {
    return (
        <Routes>
            <Route path='/' element={<Nav />}>
                <Route
                    index
                    //path={APP_ROUTES.home.path}
                    element={
                        <RouteWithFallbackBoundary>
                            <APP_ROUTES.home.component />
                        </RouteWithFallbackBoundary>
                    }
                />
                <Route
                    path={APP_ROUTES.history.path}
                    element={
                        <RouteWithFallbackBoundary>
                            <APP_ROUTES.history.component />
                        </RouteWithFallbackBoundary>
                    }
                />
            </Route>
        </Routes>
    );
};
export default Main;
