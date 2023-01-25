export const addToken = async (token: Token) => {
    localStorage.setItem('token', JSON.stringify(token));
};

export const addUser = async (id: number, username: Username) => {
    localStorage.setItem('username', JSON.stringify(username));
    localStorage.setItem('id', JSON.stringify(id));
};

export const removeToken = async () => {
    localStorage.removeItem('token');
    localStorage.removeItem('username');
    localStorage.removeItem('id');
};
