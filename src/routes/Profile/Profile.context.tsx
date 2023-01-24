import { createContext, useContext, useEffect, useState } from 'react';
import { api } from '../../api/glitch/guest-api';
import { useLogin } from '../Login/Login.context';

const ProfileContext = createContext<ProfileContext | null>(null);

export const ProfileProvider = ({ children }: ProviderProps) => {
    const [user, setUser] = useState<User | null>(null);
    const [username, setUsername] = useState<Username>(null);
    const [guests, setGuests] = useState<Guest[]>([]);
    const { token } = useLogin();
    const [loading, setLoading] = useState(false);

    const fetchGuests = async () => {
        if (!token) return;
        const data = await api.guests.list(token);
        setGuests(data);
    };

    const handleAddGuest = async (data: Guest) => {
        if (!token) return;
        await api.guests.post(data, token);
        await fetchGuests();
    };

    const handleUpdateGuest = async (
        id: string,
        restriction: boolean,
        choice: string
    ) => {
        const foundGuest = guests.find((guest) => guest.id === id);
        if (!foundGuest) return;
        if (choice === 'dairyFree') {
            foundGuest.dairyFree = !restriction;
        }
        if (choice === 'glutenFree') {
            foundGuest.glutenFree = !restriction;
        }
        if (choice === 'vegan') {
            foundGuest.vegan = !restriction;
        }
        if (choice === 'vegetarian') {
            foundGuest.vegetarian = !restriction;
        }
        if (!token) return;
        await api.guests.patch(id, foundGuest, token);
        await fetchGuests();
    };

    const handleRemoveGuest = async (id: string) => {
        if (!token) return;
        const deleted = await api.guests.delete(id, token);
        if (!deleted) return;
        await fetchGuests();
    };

    // useEffect(() => {
    //     if (token) {
    //         fetchGuests();
    //     }
    // }, []);

    return (
        <ProfileContext.Provider
            value={{
                loading,
                setLoading,
                user,
                setUser,
                username,
                setUsername,
                guests,
                fetchGuests,
                handleAddGuest,
                handleRemoveGuest,
                handleUpdateGuest,
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
