import { useEffect } from 'react';
import { RiArrowLeftLine, RiArrowRightLine } from 'react-icons/ri';
import InspirationCard from '../../components/InspoCard/InspirationCard';
import Heading from '../../components/styles/Heading.styles';
import * as Styled from './Home.styles';

const Home = () => {
    useEffect(() => {
        document.title = 'Home';
    }, []);

    return (
        <Styled.Container>
            <Styled.TextContainer>
                <Heading variant={'h1'}>
                    Friends with allergies? <br />
                    No worries, we’ll help you not to get them killed...
                </Heading>
            </Styled.TextContainer>
            <Styled.TextContainer>
                <Heading variant='h3'>Top rated recipes</Heading>
            </Styled.TextContainer>
            <Styled.SliderSection>
                <RiArrowLeftLine />
                <Styled.Slider id='slider'>
                    <Styled.SliderItem>
                        <InspirationCard />
                    </Styled.SliderItem>
                    <Styled.SliderItem>
                        <InspirationCard />
                    </Styled.SliderItem>
                    <Styled.SliderItem>
                        <InspirationCard />
                    </Styled.SliderItem>
                    <Styled.SliderItem>
                        <InspirationCard />
                    </Styled.SliderItem>
                    <Styled.SliderItem>
                        <InspirationCard />
                    </Styled.SliderItem>
                    <Styled.SliderItem>
                        <InspirationCard />
                    </Styled.SliderItem>
                    <Styled.SliderItem>
                        <InspirationCard />
                    </Styled.SliderItem>
                    <Styled.SliderItem>
                        <InspirationCard />
                    </Styled.SliderItem>
                    <Styled.SliderItem>
                        <InspirationCard />
                    </Styled.SliderItem>
                    <Styled.SliderItem>
                        <InspirationCard />
                    </Styled.SliderItem>
                    <Styled.SliderItem>
                        <InspirationCard />
                    </Styled.SliderItem>
                    <Styled.SliderItem>
                        <InspirationCard />
                    </Styled.SliderItem>
                    <Styled.SliderItem>
                        <InspirationCard />
                    </Styled.SliderItem>
                    <Styled.SliderItem>
                        <InspirationCard />
                    </Styled.SliderItem>
                    <Styled.SliderItem>
                        <InspirationCard />
                    </Styled.SliderItem>
                </Styled.Slider>
                <RiArrowRightLine />
            </Styled.SliderSection>
        </Styled.Container>
    );
};

export default Home;
