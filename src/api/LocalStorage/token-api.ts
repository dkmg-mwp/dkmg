export const addToken = async (token: Token) => {
    localStorage.setItem('token', JSON.stringify(token));
};

export const removeToken = async () => {
    localStorage.removeItem('token');
};

export const getToken = async () => {
    const token = localStorage.getItem('token');
    return token;
};
