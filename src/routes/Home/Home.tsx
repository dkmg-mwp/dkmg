import { useEffect } from 'react';
import * as Styled from './Home.styles';

const Home = () => {
    useEffect(() => {
        document.title = 'Home';
    }, []);

    return (
        <Styled.Container>
            <Styled.Wrapper>
                <Styled.TextContainer>
                    <h1>
                        Friends with allergies? No worries, we’ll help you not
                        to get them killed...
                    </h1>
                </Styled.TextContainer>
                <Styled.Container></Styled.Container>
            </Styled.Wrapper>
        </Styled.Container>
    );
};

export default Home;
