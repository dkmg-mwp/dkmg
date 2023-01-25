import Heading from '../../components/styles/Heading.styles';
import * as Styled from './Recipe.styles';

const RecipeCard = () => {
    const { recipe } = useRecipe();
    return (
        <Styled.Container>
            <Styled.Wrapper key='4'>
                <Styled.Image src={recipe.image} />
                <Styled.Recipe>
                    <Heading variant='h2'>{recipe.title}</Heading>
                    <Styled.InfoContainer>
                        <Styled.Time>
                            <Styled.TimeIcon />
                            <Heading variant='h6'>
                                {recipe.readyInMinutes}
                            </Heading>
                        </Styled.Time>
                        <Styled.Servings>
                            <Styled.ServingIcon />
                            <Heading variant='h6'>{recipe.servings}</Heading>
                        </Styled.Servings>
                    </Styled.InfoContainer>
                    <Heading variant='h4'>Ingredients :</Heading>
                    <Styled.Ingredients>
                        <Styled.Ingredient>
                            <Heading variant='h6'>
                                1 cup of uncooked rice
                            </Heading>
                        </Styled.Ingredient>
                        <Styled.Ingredient>
                            <Heading variant='h6'>
                                1/2 cup of frozen peas and carrots
                            </Heading>
                        </Styled.Ingredient>
                        <Styled.Ingredient>
                            <Heading variant='h6'>2 eggs</Heading>
                        </Styled.Ingredient>
                        <Styled.Ingredient>
                            <Heading variant='h6'>
                                2 cloves of garlic, minced
                            </Heading>
                        </Styled.Ingredient>
                    </Styled.Ingredients>
                    <Heading variant='h4'>How To Do It Step-By-Step</Heading>
                    <Styled.Instructions>
                        <Styled.Step>
                            <Heading variant='p'>{recipe.instructions}</Heading>
                        </Styled.Step>
                    </Styled.Instructions>
                </Styled.Recipe>
            </Styled.Wrapper>
        </Styled.Container>
    );
};

export default RecipeCard;
