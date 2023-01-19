interface ProviderProps {
    children?: React.ReactNode;
}

interface SearchContext {
    setDishes: React.Dispatch<React.SetStateAction>;
    dishes: Dish[];
}
interface LoginContext {
    token: string;
    setToken: React.Dispatch<React.SetStateAction>;
}
interface ProfileContext {
    setUser: React.Dispatch<React.SetStateAction>;
    user: User | null;
    guests: Guest[];
    fetchGuests: () => Promise<unknown>;
    handleAddGuest: (data: Guest) => Promise<unknown>;
    handleRemoveGuest: (id: string) => Promise<unknown>;
    handleUpdateGuest: (
        id: string,
        restriction: boolean,
        choice: string
    ) => Promise<unknown>;
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
    userId: string;
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
