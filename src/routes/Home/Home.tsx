import { useState } from 'react';
import SearchBar from '../../components/SearchBar/SearchBar';
import {
    Container,
    Wrapper,
    InnerContainer,
    TextContainer,
} from './Home.styles';

const Home = () => {
    const [food, setFood] = useState<Food[]>([]);
    return (
        <Container>
            <Wrapper>
                <TextContainer>
                    <h1>
                        Friends with allergies? No worries, we’ll help you not
                        to get them killed...
                    </h1>
                </TextContainer>
                <InnerContainer>
                    <SearchBar setFood={setFood} />
                </InnerContainer>
            </Wrapper>
        </Container>
    );
};

export default Home;
