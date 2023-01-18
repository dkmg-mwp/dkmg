interface ProviderProps {
    children?: React.ReactNode;
}

interface SearchContext {
    setDishes: React.Dispatch<React.SetStateAction>;
    dishes: Dish[];
}
interface LoginContext {
    token: Token;
    setToken: React.Dispatch<React.SetStateAction>;
}
interface ProfileContext {
    setUser: React.Dispatch<React.SetStateAction>;
    // setGuests: React.Dispatch<React.SetStateAction>;
    user: User | null;
    guests: Guest[];
    handleAddGuest: (data: Guest) => Promise<uknown>;
    handleAddUser: (data: User) => Promise<uknown>;
    handleRemoveProfile: (id: string) => Promise<uknown>;
    handleUpdateProfile: (
        id: string,
        restriction: boolean,
        choice: string
    ) => Promise<uknown>;
}

type Dish = {
    id: number;
    image: string;
    imageType: string;
    title: string;
    dairyFree: boolean;
    glutenFree: boolean;
    vegan: boolean;
    vegetarian: boolean;
    title: string;
};

type Guest = {
    id: string;
    name: string;
    dairyFree: boolean;
    glutenFree: boolean;
    vegan: boolean;
    vegetarian: boolean;
};

interface GuestList {
    guest: Guest;
}

type User = {
    id: string;
    email: string;
    dairyFree?: boolean;
    glutenFree?: boolean;
    vegan?: boolean;
    vegetarian?: boolean;
};
