import SearchBar from '../../components/SearchBar/SearchBar';
import { useEffect } from 'react';
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
                <Card />
            </InnerContainer>
        </Container>
    );
};

export default Search;
