import { RiGroupFill, RiTimeFill } from 'react-icons/ri';
import Heading from '../../components/styles/Heading.styles';
import * as Styled from './Recipe.styles';

const RecipeCard = () => {
    return (
        <Styled.Modal key='4'>
            <Styled.Image src='https://www.thewholesomedish.com/wp-content/uploads/2018/07/Best-Lasagna-550-500x375.jpg' />
            <Heading variant='h3'>Lasagna</Heading>
            <Styled.InfoContainer>
                <Styled.Time>
                    <RiTimeFill /> 45 min
                </Styled.Time>
                <Styled.Servings>
                    <RiGroupFill /> 4 servings
                </Styled.Servings>
            </Styled.InfoContainer>
            <Styled.Ingredients>
                <Heading variant='h4'>Ingredients</Heading>
                <Styled.Ingredient>
                    <Heading variant='p'>1 cup of uncooked rice</Heading>
                </Styled.Ingredient>
                <Styled.Ingredient>
                    <Heading variant='p'>
                        1/2 cup of frozen peas and carrots
                    </Heading>
                </Styled.Ingredient>
                <Styled.Ingredient>
                    <Heading variant='p'>2 eggs</Heading>
                </Styled.Ingredient>
                <Styled.Ingredient>
                    <Heading variant='p'>2 cloves of garlic, minced</Heading>
                </Styled.Ingredient>
            </Styled.Ingredients>
            <Styled.Instructions>
                <Heading variant='h4'>How To Do It Step-By-Step</Heading>
            </Styled.Instructions>
            <Styled.Step>
                <Heading variant='p'>
                    1.Cook the rice according to package instructions. Once
                    cooked, set it aside.
                </Heading>
            </Styled.Step>
            <Styled.Step>
                <Heading variant='p'>
                    2.Cook the rice according to package instructions. Once
                    cooked, set it aside.
                </Heading>
            </Styled.Step>
            <Styled.Step>
                <Heading variant='p'>
                    3.Cook the rice according to package instructions. Once
                    cooked, set it aside.
                </Heading>
            </Styled.Step>
            <Styled.Step>
                <Heading variant='p'>
                    4.Cook the rice according to package instructions. Once
                    cooked, set it aside.
                </Heading>
            </Styled.Step>
            <Styled.Step>
                <Heading variant='p'>
                    5.Cook the rice according to package instructions. Once
                    cooked, set it aside.
                </Heading>
            </Styled.Step>
        </Styled.Modal>
    );
};

export default RecipeCard;
