import SearchBar from '../../components/SearchBar/SearchBar';
import { useState } from 'react';
import Card from '../../components/Card/Card';
import { Container, InnerContainer, Text } from './Search.styles';

type Props = {
    food: Food[];
    setFood: React.Dispatch<React.SetStateAction<Food[]>>;
};

const Search = ({ food, setFood }: Props) => {
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
