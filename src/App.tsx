import Home from './routes/Home/Home';
import Search from './routes/Search/Search';
import { Outlet } from 'react-router-dom';

function App() {
    return (
        <div className='App'>
            <Home />
            <Search />
            <Outlet />
        </div>
    );
}

export default App;
