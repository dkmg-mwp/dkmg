import { useEffect } from 'react';
import { RiArrowRightLine, RiCloseCircleFill } from 'react-icons/ri';
import { useNavigate } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';
import SliderItem from '../../components/SliderItem/SliderItem';
import { MediumButton } from '../../components/styles/Button.styles';
import Heading from '../../components/styles/Heading.styles';
import { useLogin } from '../Login/Login.context';
import { useRecipe } from '../Recipe/Recipe.context';
import * as Styled from './Home.styles';

const Home = () => {
    const { randomRecipe } = useRecipe();
    const { token } = useLogin();
    const navigate = useNavigate();

    const handleOnClick = () => {
        navigate(`login`);
    };

    const notify = () =>
        toast((t) => (
            <Styled.Wrapper>
                <Styled.ToastSection>
                    <Styled.ToastContainer>
                        <Heading variant='p'>
                            Hey! Sign up & and you can add your friends
                            allergies, and filter food after their needs? Cool
                            huh
                        </Heading>
                        <Styled.ToastContainer>
                            <RiCloseCircleFill
                                color='#FFFEFE'
                                size={30}
                                onClick={() => toast.dismiss(t.id)}
                            />
                        </Styled.ToastContainer>
                    </Styled.ToastContainer>
                    <MediumButton
                        bgColor='#2b8872'
                        onClick={() => handleOnClick()}
                    >
                        Get Started <RiArrowRightLine />
                    </MediumButton>
                </Styled.ToastSection>
            </Styled.Wrapper>
        ));

    useEffect(() => {
        document.title = 'Home';
    }, []);

    useEffect(() => {
        if (token) return;
        notify();
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
                <Toaster
                    toastOptions={{
                        position: 'top-center',
                        duration: 9999999,
                        style: {
                            marginTop: '200px',
                            backgroundColor: '#EF8A62',
                            color: '#FFFEFE',
                            clipPath:
                                'polygon(0% 0%, 100% 0%, 100% 75%, 75% 75%, 74% 91%, 50% 75%, 0% 75%)',
                        },
                    }}
                />
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
