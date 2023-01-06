import { useState } from 'react';
import SearchBar from '../../components/SearchBar/SearchBar';
import { Title, Container, SearchBarSection, Wrapper } from './Home.styles';

const Home = () => {
    const [food, setFood] = useState<Food[]>([]);
    return (
        <Container>
            <Wrapper>
                <Title>
                    Friends with allergies? No worries, we’ll help you not to
                    get them killed...
                </Title>
                <SearchBarSection>
                    <SearchBar setFood={setFood} />
                </SearchBarSection>
            </Wrapper>
        </Container>
    );
};

export default Home;
