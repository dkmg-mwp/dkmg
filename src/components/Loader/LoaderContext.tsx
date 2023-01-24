import { createContext, useState, useContext, useEffect } from 'react';
import { api } from '../../api/glitch/guest-api';
import { useLogin } from '../../routes/Login/Login.context';
import { useProfile } from '../../routes/Profile/Profile.context';

const LoaderContext = createContext<boolean | null>(true);

export const LoaderProvider = ({ children }: ProviderProps) => {
    const [loading, setLoading] = useState<boolean>(true);
    const { token } = useLogin();
    const { setGuests } = useProfile();
    const initialLoad = async () => {
        setLoading(true);
        try {
            if (!token) return;
            await api.guests.list(token).then(setGuests);
        } catch (error) {
            console.error(error);
        }
        setLoading(false);
    };

    useEffect(() => {
        initialLoad();
    }, []);

    return (
        <LoaderContext.Provider value={{ loading, setLoading }}>
            {children}
        </LoaderContext.Provider>
    );
};

export const useLoader = () => {
    const contextValue = useContext(LoaderContext);
    if (!contextValue) {
        throw new Error('UseLoader is outside LoaderProvider');
    }
    return contextValue;
};
