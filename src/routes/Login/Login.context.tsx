import { createContext } from 'react';

type AccountType = {
    switchToSignUp?: () => void;
    switchToLogIn?: () => void;
};
export const AccountContext = createContext<Partial<AccountType>>({});
