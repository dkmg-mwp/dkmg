import axios from 'axios';
import { useState } from 'react';
import { RiSearchLine } from 'react-icons/ri';
import { useSearch } from '../../routes/Search/Search.context';
import { SearchBarContainer, SearchBarInput } from './SearchBar.styles';

const SearchBar = () => {
    const { setDishes } = useSearch();
    const [input, setInput] = useState('');

    const handleSearch = async (search: string) => {
        const res = await axios.get(
            `${import.meta.env.VITE_URL_KEY}recipes/complexSearch?apiKey=${
                import.meta.env.VITE_API_KEY
            }&query=${search}`
        );
        setDishes(res.data.results);
        return res.data;
    };

    const handleKey = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            handleSearch(input);
        }
    };

    return (
        <SearchBarContainer>
            <SearchBarInput
                type='text'
                value={input}
                placeholder='Search recipe'
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => handleKey(e)}
            />
            <RiSearchLine onClick={() => handleSearch(input)} size={25} />
        </SearchBarContainer>
    );
};

export default SearchBar;
