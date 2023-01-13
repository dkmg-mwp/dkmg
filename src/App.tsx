import Navbar from './components/Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import GlobalStyle from './components/styles/Globalstyles.styled';

function App() {
    return (
        <div className='App'>
            <Outlet />
            <Navbar />
            <GlobalStyle />
        </div>
    );
}

export default App;
