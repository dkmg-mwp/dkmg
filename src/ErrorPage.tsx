import { useRouteError } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import GlobalStyle from './components/styles/Globalstyles.styled';
import Heading from './components/styles/Heading.styles';
import styled from 'styled-components';

export const Container = styled.section`
    min-width: 100vw;
    min-height: 100vh;
    top: 0px;
    background: #cce3c8;
    padding-top: 50px;
`;
export const TextContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 30px 40px 10px 40px;
    flex-direction: column;
`;
export const Image = styled.img`
    padding: 0.5rem;
`;

type Err = {
    status: number;
    statusText: string;
    message: string;
};

export default function ErrorPage() {
    const error = useRouteError() as Err;
    console.log(error.status + error.statusText);
    console.log(error.message);

    return (
        <Container id='error-page'>
            <TextContainer>
                <Heading variant={'h1'}>
                    Oops! Seems like something went a bit potato..{' '}
                </Heading>
                <Image
                    src='https://i.ibb.co/7bTnLj0/Error.png'
                    alt='error'
                    height='100px'
                />
            </TextContainer>
            <TextContainer>
                {' '}
                <Heading variant={'h3'}>
                    But it is not your potato fault it is our...
                </Heading>
                <Image
                    src='https://i.ibb.co/s1Qbt5T/Error-orange-face.png'
                    alt='Error-orange-face'
                    height='100px'
                />
            </TextContainer>
            <Navbar />
            <GlobalStyle />
        </Container>
    );
}
