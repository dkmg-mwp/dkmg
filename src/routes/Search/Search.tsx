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
    Wrapper,
} from './Search.styles';
import { useSearch } from './Search.context';
import axios from 'axios';
import GuestFilter from '../../components/GuestFilter/GuestFilter';
import { useProfile } from '../Profile/Profile.context';

const Search = () => {
    const { dishes, setDishes } = useSearch();
    const { guests } = useProfile();

    const handleSearch = async (search: string) => {
        const res = await axios.get(
            `${
                import.meta.env.VITE_URL_KEY
            }recipes/complexSearch?addRecipeInformation=true&apiKey=${
                import.meta.env.VITE_API_KEY
            }&query=${search}`
        );
        setDishes(res.data.results);
        return res.data;
    };

    useEffect(() => {
        document.title = 'Search';
    }, []);

    return (
        <Container>
            <TextContainer>
                <H3>Search recipes for your next gathering!</H3>
            </TextContainer>
                <Wrapper>
                    {guests.map((guest) => (
                        <GuestFilter key={guest.id} guest={guest} />
                    ))}
                </Wrapper>
            <InnerContainer>
                <SearchContainer>
                    <SearchBar handleSearch={handleSearch} />
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
