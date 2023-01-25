import { useEffect } from 'react';
import { createContext, useContext, useState } from 'react';
import axios from 'axios';

const RecipeContext = createContext<RecipeContext | null>(null);

export const RecipeProvider = ({ children }: ProviderProps) => {
    const [randomRecipe, setRandomRecipe] = useState<Recipe[] | null>(null);
    const [recipe, setRecipe] = useState<Recipe | null>(null);

    const handleGetRandomRecipes = async () => {
        const res = await axios.get(
            `${
                import.meta.env.VITE_URL_KEY
            }recipes/random?number=5&RecipeInformation=true&apiKey=${
                import.meta.env.VITE_API_KEY
            }`
        );
        setRandomRecipe(res.data.recipes);
        return res.data;
    };

    useEffect(() => {
        handleGetRandomRecipes();
    }, []);

    return (
        <RecipeContext.Provider
            value={{
                randomRecipe,
                setRandomRecipe,
                recipe,
                setRecipe,
            }}
        >
            {children}
        </RecipeContext.Provider>
    );
};

export const useRecipe = () => {
    const contextValue = useContext(RecipeContext);
    if (!contextValue) {
        throw new Error('useRecipe is outside RecipeProvider');
    }
    return contextValue;
};
