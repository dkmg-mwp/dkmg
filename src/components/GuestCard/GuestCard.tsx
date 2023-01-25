import { useState } from 'react';
import { RiArrowDownSLine, RiArrowUpSLine } from 'react-icons/ri';
import GuestAllergyList from '../GuestAllergyList/GuestAllergyList';
import * as Styled from './GuestCard.styles';
import { SmallButton } from '../styles/Button.styles';
import { useProfile } from '../../routes/Profile/Profile.context';
import Heading from '../styles/Heading.styles';

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
                            Allergies <RiArrowDownSLine />
                        </SmallButton>
                    ) : (
                        <SmallButton onClick={() => handleOnClick()}>
                            See Less <RiArrowUpSLine size={20} />
                        </SmallButton>
                    )}
                </Styled.CardColumnRight>
            </Styled.CardWrapper>

            {open && <GuestAllergyList key={guest.id} guest={guest} />}
        </Styled.CardContainer>
    );
};

export default GuestCard;
