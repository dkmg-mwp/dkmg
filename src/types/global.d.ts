interface ProviderProps {
    children?: React.ReactNode;
}

interface restrictionsProp {
    guest: Guest;
    setDairyFree: React.Dispatch<React.SetStateAction<boolean>>;
    setGlutenFree: React.Dispatch<React.SetStateAction<boolean>>;
    setVegan: React.Dispatch<React.SetStateAction<boolean>>;
    setVegetarian: React.Dispatch<React.SetStateAction<boolean>>;
}
interface guestProp {
    guest: Guest;
}

interface SearchContext {
    setDishes: React.Dispatch<React.SetStateAction>;
    dishes: Dish[];
}

interface ProfileContext {
    setUsers: React.Dispatch<React.SetStateAction>;
    setGuests: React.Dispatch<React.SetStateAction>;
    users: User[];
    guests: Guest[];
    handleAddProfile: (
        name: string,
        dairyFree: boolean,
        glutenFree: boolean,
        vegan: boolean,
        vegetarian: boolean
    ) => Promise<uknown>;
    handleRemoveProfile: (id: string) => Promise<uknown>;
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

type User = {
    id: string;
    name: string;
    dairyFree?: boolean;
    glutenFree?: boolean;
    vegan?: boolean;
    vegetarian?: boolean;
};
