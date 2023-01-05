import Search from './routes/Search/Search';
import { useState } from 'react';
import { Outlet } from 'react-router-dom';

function App() {
    return (
        <div className='App'>
            <Search />
            <Outlet />
        </div>
    );
}

export default App;
