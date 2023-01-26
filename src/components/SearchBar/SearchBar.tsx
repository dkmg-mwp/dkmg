import { useState } from 'react';
import * as Styled from './SearchBar.styles';

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
        <Styled.SearchBarContainer>
            <Styled.SearchBarInput
                type='text'
                value={input}
                placeholder='Search recipe'
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => handleKey(e)}
            />
            <Styled.SearchIcon onClick={() => handleSearch(input)} size={25} />
        </Styled.SearchBarContainer>
    );
};

export default SearchBar;
