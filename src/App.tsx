import Navbar from './components/Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import GlobalStyle from './components/styles/Globalstyles.styled';
import Header from './components/Header/Header';
import { useEffect } from 'react';
import { useLogin } from './routes/Login/Login.context';
import { useProfile } from './routes/Profile/Profile.context';

function App() {
    const { setToken, token } = useLogin();
    const { fetchGuests, setUsername, guests, setUser } = useProfile();

    useEffect(() => {
        const LocalToken = localStorage.getItem('token');
        const LocalUsername = localStorage.getItem('username');
        const LocalUserId = localStorage.getItem('id');
        if (LocalToken && LocalUsername && LocalUserId) {
            setToken(JSON.parse(LocalToken));
            setUsername(JSON.parse(LocalUsername));
            setUser(JSON.parse(LocalUserId.toString()));
        }
    }, []);
    useEffect(() => {
        if (token && guests.length < 1) fetchGuests();
    }, [token]);

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
