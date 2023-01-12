import { createContext, useContext, useEffect, useState } from 'react';
import { addGuest, fetchGuests, removeGuest } from '../../api/dkmg-api';
const ProfileContext = createContext<ProfileContext | null>(null);
export const ProfileProvider = ({ children }: ProviderProps) => {
    const [users, setUsers] = useState<User[]>([]);
    const [guests, setGuests] = useState<Guest[]>([]);

    const handleAddProfile = async (name: string) => {
        await addGuest(name);
        await fetchGuests().then(setGuests);
    };

    const handleRemoveProfile = async (id: string) => {
        await removeGuest(id).then(() => fetchGuests().then(setGuests));
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