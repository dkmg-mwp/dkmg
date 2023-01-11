import { useState } from 'react';
import SearchBar from '../../components/SearchBar/SearchBar';
import Card from '../../components/Card/Card';
import { Container, InnerContainer, Text } from './Search.styles';

const Search = () => {
    const [food, setFood] = useState<Food[]>([]);

    return (
        <Container>
            <Text>Search recipes for your next gathering!</Text>
            <InnerContainer>
                <SearchBar setFood={setFood} />
                <h3>Results for: </h3>
                <Card food={food} />
            </InnerContainer>
        </Container>
    );
};

export default Search;
