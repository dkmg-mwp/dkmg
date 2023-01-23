import { useEffect } from 'react';
import Card from '../../components/Card/Card';
import InspirationCard from '../../components/InspoCard/InspirationCard';
import Heading from '../../components/styles/Heading.styles';
import { List, ListItem, ListSection } from '../Profile/Profile.styles';
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
                <Styled.TextContainer>
                    <Heading variant='h3'>Top rated recipes</Heading>
                </Styled.TextContainer>
                <Styled.InnerContainer>
                    <InspirationCard />
                    <InspirationCard />
                </Styled.InnerContainer>
            </Styled.Wrapper>
        </Styled.Container>
    );
};

export default Home;
