import { useEffect } from 'react';
import { RiArrowRightLine } from 'react-icons/ri';
import { useNavigate } from 'react-router-dom';
import SliderItem from '../../components/SliderItem/SliderItem';
import { MediumButton } from '../../components/styles/Button.styles';
import Heading from '../../components/styles/Heading.styles';
import { useRecipe } from '../Recipe/Recipe.context';
import * as Styled from './Home.styles';

const Home = () => {
    const { randomRecipe } = useRecipe();
    const navigate = useNavigate();
    const handleOnClick = () => {
        navigate(`login`);
    };
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
                <MediumButton onClick={() => handleOnClick()}>
                    Get Started <RiArrowRightLine />
                </MediumButton>
            </Styled.TextContainer>
            <Styled.SliderSection>
                <Styled.Slider id='slider'>
                    {randomRecipe &&
                        randomRecipe.map((recipe) => (
                            <SliderItem key={recipe.id} recipe={recipe} />
                        ))}
                </Styled.Slider>
            </Styled.SliderSection>
        </Styled.Container>
    );
};

export default Home;
