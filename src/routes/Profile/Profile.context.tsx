import { createContext, useContext, useEffect, useState } from 'react';
import {
    // addGuest,
    fetchGuests,
    removeGuest,
    updateGuest,
} from '../../api/dkmg-api';
import { api } from '../../api/glitch/guest-api';
import { useLogin } from '../Login/Login.context';

const ProfileContext = createContext<ProfileContext | null>(null);

export const ProfileProvider = ({ children }: ProviderProps) => {
    const [user, setUser] = useState<User | null>(null);
    const [guests, setGuests] = useState<Guest[]>([]);
    const { token } = useLogin();

    const handleAddGuest = async (data: Guest) => {
        await api.guests.post(data, token);
        setGuests((guests) => [...guests, data]);
        console.log(guests);
        await api.guests.list(token);
    };

    const handleAddUser = async (data: User) => {
        setUser(data);
        await api.guests.list(token);
    };

    const handleRemoveProfile = async (id: string) => {
        await removeGuest(id).then(() => fetchGuests().then(setGuests));
    };

    const handleUpdateProfile = async (
        id: string,
        restriction: boolean,
        choice: string
    ) => {
        await updateGuest(id, restriction, choice).then(() =>
            fetchGuests().then(setGuests)
        );
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
                handleAddGuest,
                handleAddUser,
                handleRemoveProfile,
                handleUpdateProfile,
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
