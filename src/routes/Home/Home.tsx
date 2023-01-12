import { useEffect } from 'react';
import { Container, Wrapper, TextContainer } from './Home.styles';

const Home = () => {
    useEffect(() => {
        document.title = 'Home';
    }, []);
    return (
        <Container>
            <Wrapper>
                <TextContainer>
                    <h1>
                        Friends with allergies? No worries, we’ll help you not
                        to get them killed...
                    </h1>
                </TextContainer>
            </Wrapper>
        </Container>
    );
};

export default Home;
