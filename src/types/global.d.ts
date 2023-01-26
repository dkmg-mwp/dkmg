interface ProviderProps {
    children?: React.ReactNode;
}

interface RecipeContext {
    randomRecipe: Recipe[] | null;
    setRandomRecipe: React.Dispatch<React.SetStateAction>;
    recipe: Recipe | null;
    setRecipe: React.Dispatch<React.SetStateAction>;
}

interface SearchContext {
    dishes: Dish[];
    setDishes: React.Dispatch<React.SetStateAction>;
}

interface LoginContext {
    token: Token;
    setToken: React.Dispatch<React.SetStateAction>;
}

interface ProfileContext {
    user: User | null;
    setUser: React.Dispatch<React.SetStateAction>;
    username: Username;
    setUsername: React.Dispatch<React.SetStateAction>;
    loading: boolean;
    setLoading: React.Dispatch<React.SetStateAction>;
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

interface GuestList {
    guest: Guest;
}

type Token = string | null;

type Username = string | null;

type User = number;

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
    userId: number;
    name: string;
    dairyFree: boolean;
    glutenFree: boolean;
    vegan: boolean;
    vegetarian: boolean;
};

type Recipe = {
    id: number;
    title: string;
    image: string;
    servings: number;
    readyInMinutes: number;
    extendedIngredients: ExtendedIngredients[];
    analyzedInstructions: AnalyzedInstructions[];
};

type ExtendedIngredients = {
    id: number;
    name: string;
    amount: number;
    unit: string;
};

type AnalyzedInstructions = {
    steps: Steps[];
};

type Steps = {
    number: number;
    step: string;
};
