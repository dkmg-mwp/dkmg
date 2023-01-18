import Navbar from './components/Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import GlobalStyle from './components/styles/Globalstyles.styled';
import Header from './components/Header/Header';

function App() {
    return (
        <div className='App'>
            <Header/>
            <Outlet />
            <Navbar />
            <GlobalStyle />
        </div>
    );
}

export default App;
