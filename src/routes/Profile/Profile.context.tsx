import { createContext, useContext, useEffect, useState } from 'react';
import {
    // addGuest,
    fetchGuests,
    removeGuest,
    updateGuest,
} from '../../api/dkmg-api';
import { api } from '../../api/glitch/guest-api';

const ProfileContext = createContext<ProfileContext | null>(null);

export const ProfileProvider = ({ children }: ProviderProps) => {
    const [users, setUsers] = useState<User[]>([]);
    const [guests, setGuests] = useState<Guest[]>([]);

    const handleAddProfile = async (data: Guest) => {
        await api.guests.post(data)
        setGuests([data])
        await api.guests.list();
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
        fetchGuests().then(setGuests);
    }, []);

    return (
        <ProfileContext.Provider
            value={{
                // users,
                setUsers,
                guests,
                // setGuests,
                handleAddProfile,
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
