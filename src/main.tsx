import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ContextWrapper } from './utils/ContextWrapper';
import App from './App';
import ErrorPage from './ErrorPage';
import Home from './routes/Home/Home';
import Search from './routes/Search/Search';
import User from './routes/Profile/Profile';
import Login from './routes/Login/Login';
import Recipe from './routes/Recipe/Recipe';

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
            {
                path: 'login',
                element: <Login />,
            },
            {
                path: 'recipe/:id',
                element: <Recipe />,
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
