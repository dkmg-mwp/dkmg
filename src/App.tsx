import Navbar from './components/Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import GlobalStyle from './components/styles/Globalstyles.styled';
import Header from './components/Header/Header';
import { useEffect } from 'react';
import { useLogin } from './routes/Login/Login.context';
import { useProfile } from './routes/Profile/Profile.context';

function App() {
    const { setToken, token } = useLogin();
    const { fetchGuests } = useProfile();

    useEffect(() => {
        const LocalToken = localStorage.getItem('token');
        if (LocalToken) {
            setToken(LocalToken);
        }
        if (token) {
            fetchGuests();
        }
    }, []);

    return (
        <div className='App'>
            <Header />
            <Outlet />
            <Navbar />
            <GlobalStyle />
        </div>
    );
}

export default App;
