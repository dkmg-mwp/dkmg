import axios from 'axios';
import { useEffect, useState } from 'react';
import { LoadingOverlay } from '../../components/Loader/LoadingOverlay';
import { useSearch } from './Search.context';
import { useProfile } from '../Profile/Profile.context';
import { useLogin } from '../Login/Login.context';
import SearchBar from '../../components/SearchBar/SearchBar';
import GuestFilter from '../../components/GuestFilter/GuestFilter';
import FilteredDishes from '../../components/FilteredDishes/FilteredDishes';
import Card from '../../components/Card/Card';
import Heading from '../../components/styles/Heading.styles';
import * as Styled from './Search.styles';

const Search = () => {
    const { dishes, setDishes } = useSearch();
    const { guests, user, setLoading, loading } = useProfile();
    const { token } = useLogin();

    const [selectedGuest, setSelectedGuest] = useState<string[]>([]);
    const [filteredGuest, setFilteredGuest] = useState<Guest[]>();

    const handleSearch = async (search: string) => {
        setLoading(true);
        try {
            const res = await axios.get(
                `${
                    import.meta.env.VITE_URL_KEY
                }recipes/complexSearch?addRecipeInformation=true&fillIngredients=true&apiKey=${
                    import.meta.env.VITE_API_KEY
                }&query=${search}`
            );
            setDishes(res.data.results);
            setLoading(false);
            return res.data;
        } catch (error) {
            console.error(error);
        }
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
                <Heading variant='h1'>
                    Search recipes for your next gathering!
                </Heading>
            </Styled.TextContainer>
            {user && (
                <Styled.Wrapper>
                    {token &&
                        guests
                            .filter((guest) => guest.userId === user)
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
                </Styled.SearchContainer>
                {loading ? (
                    <LoadingOverlay />
                ) : (
                    <Styled.SearchResult>
                        {!filteredGuest ? (
                            dishes.map((dish) => (
                                <Card key={dish.id} dish={dish} />
                            ))
                        ) : (
                            <FilteredDishes
                                guests={filteredGuest}
                                dishes={dishes}
                                selectedGuest={selectedGuest}
                            />
                        )}
                    </Styled.SearchResult>
                )}
            </Styled.InnerContainer>
        </Styled.Container>
    );
};

export default Search;
