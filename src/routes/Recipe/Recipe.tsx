import { RiCheckboxBlankCircleLine } from 'react-icons/ri';
import Heading from '../../components/styles/Heading.styles';
import { useRecipe } from './Recipe.context';
import * as Styled from './Recipe.styles';

const RecipeCard = () => {
    const { recipe } = useRecipe();

    return recipe ? (
        <Styled.Container>
            <Styled.Wrapper key='4'>
                <Styled.Image src={recipe.image} />
                <Styled.Recipe>
                    <Heading variant='h2'>{recipe.title}</Heading>
                    <Styled.FirstSection>
                        <Styled.InfoContainer>
                            <Styled.Time>
                                <Styled.TimeIcon />
                                <Heading variant='h6'>
                                    {recipe.readyInMinutes} min
                                </Heading>
                            </Styled.Time>
                            <Styled.Servings>
                                <Styled.ServingIcon />
                                <Heading variant='h6'>
                                    {recipe.servings} servings
                                </Heading>
                            </Styled.Servings>
                        </Styled.InfoContainer>
                        <Heading variant='h4'>Ingredients:</Heading>
                        <Styled.Ingredients>
                            {recipe.extendedIngredients.map(
                                (ingredient: ExtendedIngredients, index: number) => (
                                    <Styled.Ingredient key={index}>
                                        {/* Change color for amount */}
                                        <Styled.Amount  color='#2b8872'><RiCheckboxBlankCircleLine/></Styled.Amount>
                                        <Styled.Amount weight={800} >
                                            {ingredient.amount}
                                        </Styled.Amount>
                                        <Styled.Amount weight={800}color='#2b8872'>
                                            {ingredient.unit}
                                        </Styled.Amount>
                                        <Styled.Amount color='#2b8872'>
                                            {ingredient.name}
                                        </Styled.Amount>
                                    </Styled.Ingredient>
                                )
                            )}
                        </Styled.Ingredients>
                    </Styled.FirstSection>
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
    ) : (
        <Heading variant='p'>No recipe here</Heading>
    );
};

export default RecipeCard;
