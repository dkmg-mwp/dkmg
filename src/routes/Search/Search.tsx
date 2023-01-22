import SearchBar from '../../components/SearchBar/SearchBar';
import { useEffect, useState } from 'react';
import Card from '../../components/Card/Card';
import * as Styled from './Search.styles';
import { useSearch } from './Search.context';
import axios from 'axios';
import GuestFilter from '../../components/GuestFilter/GuestFilter';
import { useProfile } from '../Profile/Profile.context';
import FilteredDishes from '../../components/FilteredDishes/FilteredDishes';
import { useLogin } from '../Login/Login.context';
import Heading from '../../components/styles/Heading.styles';

const Search = () => {
    const { dishes, setDishes } = useSearch();
    const { guests, user } = useProfile();
    const { token } = useLogin();
    const [selectedGuest, setSelectedGuest] = useState<string[]>([]);
    const [filteredGuest, setFilteredGuest] = useState<Guest[]>();

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

    const handleFiltredGuest = () => {
        if (!selectedGuest.length) return;
        const newFilter = guests.filter((guest) =>
            selectedGuest.includes(guest.id)
        );
        setFilteredGuest(newFilter);
    };

    useEffect(() => {
        document.title = 'Search';
    }, []);

    useEffect(() => {
        handleFiltredGuest();
        if (selectedGuest.length === 0) {
            setFilteredGuest([]);
        }
    }, [selectedGuest]);

    return (
        <Styled.Container>
            <Styled.TextContainer>
                <Heading variant='h1'>Search recipes for your next gathering!</Heading>
            </Styled.TextContainer>
            {user && (
                <Styled.Wrapper>
                    {token &&
                        guests
                            .filter((guest) => guest.userId === user.id)
                            .map((guest) => (
                                <GuestFilter
                                    key={guest.id}
                                    guest={guest}
                                    setSelectedGuest={setSelectedGuest}
                                />
                            ))}
                </Styled.Wrapper>
            )}
            <Styled.InnerContainer>
                <Styled.SearchContainer>
                    <SearchBar handleSearch={handleSearch} />
                    <Heading variant='h3'>Results for:</Heading>
                </Styled.SearchContainer>
                <Styled.SearchResult>
                    {!filteredGuest ? (
                        dishes.map((dish) => <Card key={dish.id} dish={dish} />)
                    ) : (
                        <FilteredDishes
                            guests={filteredGuest}
                            dishes={dishes}
                        />
                    )}
                </Styled.SearchResult>
            </Styled.InnerContainer>
        </Styled.Container>
    );
};

export default Search;
