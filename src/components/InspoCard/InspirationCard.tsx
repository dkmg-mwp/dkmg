import { RiArrowRightLine } from 'react-icons/ri';
import { SmallButton } from '../styles/Button.styles';
import Heading from '../styles/Heading.styles';
import * as Styled from './Inspiration.styles';

const InspirationCard = () => {
    return (
        <Styled.CardContainer>
            <Styled.CardWrapper>
                <Styled.CardColumnLeft>
                    <Styled.CardImage src='https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?cs=srgb&dl=pexels-ella-olsson-1640777.jpg&fm=jpg' />
                </Styled.CardColumnLeft>
                <Styled.CardColumnRight>
                    <Heading variant={'h5'}>Title</Heading>
                    <SmallButton primary>
                        See recipe
                        <RiArrowRightLine />
                    </SmallButton>
                </Styled.CardColumnRight>
            </Styled.CardWrapper>
        </Styled.CardContainer>
    );
};

export default InspirationCard;
