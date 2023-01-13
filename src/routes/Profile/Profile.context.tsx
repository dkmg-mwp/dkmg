import { createContext, useContext, useEffect, useState } from 'react';
import {
    addGuest,
    fetchGuests,
    removeGuest,
    updateGuest,
} from '../../api/dkmg-api';

const ProfileContext = createContext<ProfileContext | null>(null);

export const ProfileProvider = ({ children }: ProviderProps) => {
    const [users, setUsers] = useState<User[]>([]);
    const [guests, setGuests] = useState<Guest[]>([]);

    const handleAddProfile = async (
        name: string,
        dairyFree: boolean,
        glutenFree: boolean,
        vegan: boolean,
        vegetarian: boolean
    ) => {
        await addGuest(name, dairyFree, glutenFree, vegan, vegetarian);
        await fetchGuests().then(setGuests);
    };

    const handleRemoveProfile = async (id: string) => {
        await removeGuest(id).then(() => fetchGuests().then(setGuests));
    };

    const handleUpdateProfile = async (id: string, restriction: boolean, choice: string) => {
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
                users,
                setUsers,
                guests,
                setGuests,
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
