import { useRouteError } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import GlobalStyle from './components/styles/Globalstyles.styled';
import Heading from './components/styles/Heading.styles';
import * as Styled from './routes/Home/Home.styles';

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
        <Styled.Container id='error-page'>
            <Styled.TextContainer>
                <Heading variant={'h1'}>
                    Oops! Seems like something went a bit potato..{' '}
                </Heading>
                <img
                    src='https://i.ibb.co/7bTnLj0/Error.png'
                    alt='error'
                    height='100px'
                />
            </Styled.TextContainer>
            <Styled.TextContainer>
                {' '}
                <Heading variant={'h3'}>
                    But it is not your potato fault it is our...
                </Heading>
                <img
                    src='https://i.ibb.co/s1Qbt5T/Error-orange-face.png'
                    alt='Error-orange-face'
                    height='100px'
                />
            </Styled.TextContainer>
            <Navbar />
            <GlobalStyle />
        </Styled.Container>
    );
}
