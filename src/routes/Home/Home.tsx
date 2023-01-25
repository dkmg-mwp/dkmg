import axios from 'axios';
import { useEffect, useState } from 'react';
import SliderItem from '../../components/SliderItem/SliderItem';
import Heading from '../../components/styles/Heading.styles';
import * as Styled from './Home.styles';

const Home = () => {
    const [randomRecipe, setRandomRecipe] = useState<Recipe[]>();

    const handleGetRandomRecipes = async () => {
        const res = await axios.get(
            `${
                import.meta.env.VITE_URL_KEY
            }recipes/random?number=5&RecipeInformation=true&apiKey=${
                import.meta.env.VITE_API_KEY
            }`
        );
        setRandomRecipe(res.data.recipes);
        return res.data;
    };

    console.log(randomRecipe);

    useEffect(() => {
        document.title = 'Home';
    }, []);

    useEffect(() => {
        handleGetRandomRecipes();
    }, [setRandomRecipe]);

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
