import { createContext, useContext, useState } from 'react';

const SearchContex = createContext<SearchContext | null>(null);

export const SearchProvider = ({ children }: ProviderProps) => {
    const [dishes, setDishes] = useState<Dish[]>([]);

    return (
        <SearchContex.Provider value={{ dishes, setDishes }}>
            {children}
        </SearchContex.Provider>
    );
};

export const useSearch = () => {
    const contextValue = useContext(SearchContex);
    if (!contextValue) {
        throw new Error('useSearch is outside InvoiceProvider');
    }
    return contextValue;
};
