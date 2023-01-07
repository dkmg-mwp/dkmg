import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import ErrorPage from './ErrorPage';
import './index.css';
import Home from './routes/Home/Home';
import Search from './routes/Search/Search';
import { useState } from 'react';

const [food, setFood] = useState<Food[]>([]);

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            {
                index: true,
                element: <Home food={food} setFood={setFood} />,
            },
            {
                path: 'search',
                element: <Search  food={food} setFood={setFood}/>,
            },
        ],
    },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
