import { createContext, useContext, useEffect, useState } from 'react';
import { api } from '../../api/glitch/guest-api';
import { useLogin } from '../Login/Login.context';

const ProfileContext = createContext<ProfileContext | null>(null);

export const ProfileProvider = ({ children }: ProviderProps) => {
    const [user, setUser] = useState<User[]>([]);
    const [guests, setGuests] = useState<Guest[]>([]);
    const { token } = useLogin();

    const fetchGuests = async (token: string) => {
        const data = await api.guests.list(token);
        setGuests(data);
    };

    const handleAddGuest = async (data: Guest) => {
        await api.guests.post(data, token);
        await fetchGuests(token);
    };

    // const handleUpdateGuest = async (id: string, data) => {};

    const handleRemoveGuest = async (id: string) => {
        const deleted = await api.guests.delete(id, token);
        if (!deleted) return;
        await fetchGuests(token);
    };

    useEffect(() => {
        if (token) {
            api.guests.list(token).then(() => setGuests);
        }
    }, []);

    return (
        <ProfileContext.Provider
            value={{
                user,
                setUser,
                guests,
                fetchGuests,
                handleAddGuest,
                handleRemoveGuest,
            }}
        >
            {children}
        </ProfileContext.Provider>
    );
};

export const useProfile = () => {
    const contextValue = useContext(ProfileContext);
    if (!contextValue) {
        throw new Error('useProfile is outside ProfileProvider');
    }
    return contextValue;
};
