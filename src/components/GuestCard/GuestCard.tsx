import { useState } from 'react';
import GuestAllergyList from '../GuestAllergyList/GuestAllergyList';
import { useProfile } from '../../routes/Profile/Profile.context';
import { SmallButton } from '../styles/Button.styles';
import Heading from '../styles/Heading.styles';
import * as Styled from './GuestCard.styles';

const GuestCard = ({ guest }: GuestList) => {
    const { handleRemoveGuest } = useProfile();

    const [open, setOpen] = useState(false);

    const handleOnClick = () => {
        setOpen((prevState) => !prevState);
    };

    return (
        <Styled.CardContainer>
            <Styled.CardWrapper>
                <Styled.CardColumnLeft>
                    <Styled.CardImage src='https://i.ibb.co/2gzZF42/darkgreen-orange.png' />
                    <SmallButton
                        primary
                        onClick={() => handleRemoveGuest(guest.id)}
                    >
                        Remove
                    </SmallButton>
                </Styled.CardColumnLeft>
                <Styled.CardColumnRight>
                    <Heading variant={'h5'}>{guest.name}</Heading>
                    {!open ? (
                        <SmallButton primary onClick={() => handleOnClick()}>
                            Allergies <Styled.ArrowDown />
                        </SmallButton>
                    ) : (
                        <SmallButton onClick={() => handleOnClick()}>
                            See Less <Styled.ArrowUp size={20} />
                        </SmallButton>
                    )}
                </Styled.CardColumnRight>
            </Styled.CardWrapper>
            {open && <GuestAllergyList key={guest.id} guest={guest} />}
        </Styled.CardContainer>
    );
};

export default GuestCard;
