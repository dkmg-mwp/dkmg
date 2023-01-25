import { createContext, useContext, useState } from 'react';

const RecipeContext = createContext<RecipeContext | null>(null);

export const RecipeProvider = ({ children }: ProviderProps) => {
    const [randomRecipe, setRandomRecipe] = useState<Recipe[] | null>(null);
    const [recipe, setRecipe] = useState<Recipe | null>(null);

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
