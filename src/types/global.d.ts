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
    user: User;
    guests: Guest[];
    fetchGuests: (token) => Promise<unkown>;
    handleAddGuest: (data: Guest) => Promise<uknown>;
    handleRemoveGuest: (id: string) => Promise<uknown>;
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
    userId: string;
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
