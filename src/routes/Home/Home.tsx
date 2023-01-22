import { useEffect } from 'react';
import Heading from '../../components/styles/Heading.styles';
import * as Styled from './Home.styles';

const Home = () => {
    useEffect(() => {
        document.title = 'Home';
    }, []);

    return (
        <Styled.Container>
            <Styled.Wrapper>
                <Styled.TextContainer>
                    <Heading variant={'h1'}>
                        Friends with allergies? <br />
                        No worries, we’ll help you not to get them killed...
                    </Heading>
                </Styled.TextContainer>
                <Styled.Container></Styled.Container>
            </Styled.Wrapper>
        </Styled.Container>
    );
};

export default Home;
