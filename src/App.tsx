import Navbar from './components/Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import { useState } from 'react';

function App() {
    const [food, setFood] = useState<Food[]>([]);

    return (
        <div className='App'>
            <Outlet food={food} setFood={setFood} />
            <Navbar />
        </div>
    );
}

export default App;
