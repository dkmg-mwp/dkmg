import SearchBar from '../../components/SearchBar/SearchBar';
import { useEffect, useState } from 'react';
import Card from '../../components/Card/Card';
import {
    Container,
    H3,
    H4,
    InnerContainer,
    SearchContainer,
    SearchResult,
    TextContainer,
} from './Search.styles';

const Search = () => {
    const [food, setFood] = useState<Food[]>([]);

    useEffect(() => {
        document.title = 'Search';
    }, []);

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
                <SearchResult>
                    {food.map((item) => (
                        <Card key={item.id} food={item} />
                    ))}
                </SearchResult>
            </InnerContainer>
        </Container>
    );
};

export default Search;
