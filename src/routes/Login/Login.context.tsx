import { createContext, useContext, useState } from 'react';
type AccountType = {
    switchToSignUp?: () => void;
    switchToLogIn?: () => void;
};

const LoginContext = createContext<LoginContext | null>(null);

export const LoginProvider = ({ children }: ProviderProps) => {
    const [token, setToken] = useState<string>();
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
export const AccountContext = createContext<Partial<AccountType>>({});
