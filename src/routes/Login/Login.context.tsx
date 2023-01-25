import { createContext, useContext, useState } from 'react';

type AccountType = {
    switchToSignUp?: () => void;
    switchToLogIn?: () => void;
    switchToProfile?: () => void;
};

export const AccountContext = createContext<Partial<AccountType>>({});

const LoginContext = createContext<LoginContext | null>(null);

export const LoginProvider = ({ children }: ProviderProps) => {
    const [token, setToken] = useState<Token>(null);
    return (
        <LoginContext.Provider value={{ setToken, token }}>
            {children}
        </LoginContext.Provider>
    );
};

export const useLogin = () => {
    const contextValue = useContext(LoginContext);
    if (!contextValue) {
        throw new Error('useLogin is outside LoginProvider');
    }
    return contextValue;
};