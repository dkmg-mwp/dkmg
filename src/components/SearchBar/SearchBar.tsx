import { useState } from 'react';
import { RiSearchLine } from 'react-icons/ri';
import { SearchBarContainer, SearchBarInput } from './SearchBar.styles';

type Props = {
    handleSearch: (search: string) => void;
};

const SearchBar = ({ handleSearch }: Props) => {
    const [input, setInput] = useState('');

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
