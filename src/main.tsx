import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import ErrorPage from './ErrorPage';
import './index.css';
import Home from './routes/Home/Home';
import Search from './routes/Search/Search';
import User from './routes/Profile/Profile';
import { ContextWrapper } from './utils/ContextWrapper';

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            {
                index: true,
                element: <Home />,
            },
            {
                path: 'search',
                element: <Search />,
            },
            {
                path: 'profile',
                element: <User />,
            },
        ],
    },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <ContextWrapper>
            <RouterProvider router={router} />
        </ContextWrapper>
    </React.StrictMode>
);
