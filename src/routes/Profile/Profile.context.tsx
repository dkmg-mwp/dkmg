import { createContext, useContext, useEffect, useState } from 'react';
import { api } from '../../api/glitch/guest-api';
import { apiUser } from '../../api/glitch/user-api';
import { useLogin } from '../Login/Login.context';

const ProfileContext = createContext<ProfileContext | null>(null);

export const ProfileProvider = ({ children }: ProviderProps) => {
    const [user, setUser] = useState<User[]>([]);
    const [guests, setGuests] = useState<Guest[]>([]);
    const { token } = useLogin();

    const fetchGuests = async () => {
        const data = await api.guests.list(token);
        setGuests(data);
    };

    //behövs denna?
    const fetchUser = async () => {
        const data = await apiUser.user.list(token);
        setUser(data);
    };

    const handleAddGuest = async (data: Guest) => {
        await api.guests.post(data, token);
        await fetchGuests();
    };

    // const handleUpdateGuest = async (id: string, data) => {};

    const handleRemoveGuest = async (id: string) => {
        const deleted = await api.guests.delete(id, token);
        if (!deleted) return;
        await fetchGuests();
    };

    useEffect(() => {
        if (token) {
            api.guests.list(token).then(() => setGuests);
            apiUser.user.list(token).then(() => setUser);
        }
    }, []);

    return (
        <ProfileContext.Provider
            value={{
                user,
                fetchUser,
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
