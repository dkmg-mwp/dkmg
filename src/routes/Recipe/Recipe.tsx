import Heading from '../../components/styles/Heading.styles';
import * as Styled from './Recipe.styles';
import { useRecipe } from './Recipe.context';

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
                        {recipe.extendedIngredients.map(
                            (ingredient: ExtendedIngredients) => (
                                <Styled.Ingredient key={ingredient.id}>
                                    {/* Change color for amount */}
                                    <Heading variant='h6'>
                                        {ingredient.amount}
                                    </Heading>
                                    <Heading variant='h6'>
                                        {ingredient.unit}
                                    </Heading>
                                    <Heading variant='h6'>
                                        {ingredient.name}
                                    </Heading>
                                </Styled.Ingredient>
                            )
                        )}
                    </Styled.Ingredients>
                    <Heading variant='h4'>How To Do It Step-By-Step</Heading>
                    <Styled.Instructions>
                        {recipe.analyzedInstructions.map(
                            (instructions: AnalyzedInstructions) =>
                                instructions.steps.map((step: Steps) => (
                                    <Styled.Step key={step.number}>
                                        <Heading variant='p'>
                                            {step.step}
                                        </Heading>
                                    </Styled.Step>
                                ))
                        )}
                    </Styled.Instructions>
                </Styled.Recipe>
            </Styled.Wrapper>
        </Styled.Container>
    );
};

export default RecipeCard;
