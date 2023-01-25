import { useEffect } from 'react';
import SliderItem from '../../components/SliderItem/SliderItem';
import Heading from '../../components/styles/Heading.styles';
import { useRecipe } from '../Recipe/Recipe.context';
import * as Styled from './Home.styles';

const Home = () => {
    const { randomRecipe } = useRecipe();

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
