import { useState } from 'react';
import SearchBar from '../../components/SearchBar/SearchBar';
import { Title, Container, SearchBarSection, Wrapper } from './Home.styles';
import { useNavigate } from 'react-router-dom';

type Props = {
    food: Food[];
    setFood: React.Dispatch<React.SetStateAction<Food[]>>;
};

const Home = ({ food, setFood }: Props) => {
    const navigate = useNavigate();

    const handleSearch = () => {
        if (food.length != 0) {
            navigate('/search');
        }
        if (!food) return;
        return;
    };

    return (
        <Container>
            <Wrapper>
                <Title>
                    Friends with allergies? No worries, we’ll help you not to
                    get them killed...
                </Title>
                <SearchBarSection onClick={handleSearch}>
                    <SearchBar setFood={setFood} />
                </SearchBarSection>
            </Wrapper>
        </Container>
    );
};

export default Home;
