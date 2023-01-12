import SearchBar from '../../components/SearchBar/SearchBar';
import { useEffect } from 'react';
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
import { useSearch } from './Search.context';

const Search = () => {
    const { dishes } = useSearch();

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
                    <SearchBar />
                    <H4>Results for:</H4>
                </SearchContainer>
                <SearchResult>
                    {dishes.map((dish) => (
                        <Card key={dish.id} dish={dish} />
                    ))}
                </SearchResult>
            </InnerContainer>
        </Container>
    );
};

export default Search;
