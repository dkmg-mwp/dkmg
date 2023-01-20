import { useLogin } from '../../routes/Login/Login.context';

export const addToken = async (token: Token) => {
    localStorage.setItem('token', JSON.stringify(token));
};

export const removeToken = async () => {
    localStorage.removeItem('token');
};

export const fetchToken = async () => {
    const { setToken } = useLogin();
    const token = localStorage.getItem('token');
    setToken(token);
    console.log(token, ' token från local');
};
