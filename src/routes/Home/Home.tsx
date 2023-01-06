import { useState } from 'react';
import SearchBar from '../../components/SearchBar/SearchBar';
import { Title, Container, SearchBarSection } from './Home.styles';

const Home = () => {
    const [food, setFood] = useState<Food[]>([]);
    return (
        <Container>
            <Title>
                Friends with allergies? No worries, we’ll help you not to get
                them killed..
            </Title>
            <SearchBarSection>
                <SearchBar setFood={setFood} />
            </SearchBarSection>
        </Container>
    );
};

export default Home;
