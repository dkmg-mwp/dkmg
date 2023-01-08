import SearchBar from '../../components/SearchBar/SearchBar';
import { useState } from 'react';
import Card from '../../components/Card/Card';
import {
    Container,
    H3,
    H4,
    InnerContainer,
    SearchContainer,
    TextContainer,
} from './Search.styles';

const Search = () => {
    const [food, setFood] = useState<Food[]>([]);
    return (
        <Container>
            <TextContainer>
                <H3>Search recipes for your next gathering!</H3>
            </TextContainer>

            <InnerContainer>
                <SearchContainer>
                    <SearchBar setFood={setFood} />
                    <H4>Results for:</H4>
                </SearchContainer>
                <Card food={food} />
            </InnerContainer>
        </Container>
    );
};

export default Search;
