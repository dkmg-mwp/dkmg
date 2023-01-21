import { useState } from 'react';
import { RiArrowDownSLine, RiArrowUpSLine } from 'react-icons/ri';
import GuestAllergyList from '../GuestAllergyList/GuestAllergyList';
import * as Styled from './GuestCard.style';
import { SmallButton } from '../Buttons/Button.styles';
import { useProfile } from '../../routes/Profile/Profile.context';

const GuestCard = ({ guest }: GuestList) => {
    const { handleRemoveGuest } = useProfile();
    const [open, setOpen] = useState(false);

    const handleOnClick = () => {
        setOpen((prevState) => !prevState);
    };

    return (
        <Styled.CardContainer>
            <Styled.CardColumnIcon>
                <Styled.CardImage src='https://i.ibb.co/2gzZF42/darkgreen-orange.png' />
                <SmallButton
                    primary
                    onClick={() => handleRemoveGuest(guest.id)}
                >
                    Remove
                </SmallButton>
            </Styled.CardColumnIcon>
            <Styled.CardColumnInfo>
                <Styled.CardTitle>{guest.name}</Styled.CardTitle>
                {!open ? (
                    <SmallButton primary onClick={() => handleOnClick()}>
                        Allergies <RiArrowDownSLine size={20} />
                    </SmallButton>
                ) : (
                    <SmallButton onClick={() => handleOnClick()}>
                        See Less <RiArrowUpSLine size={20} />
                    </SmallButton>
                )}
            </Styled.CardColumnInfo>

            <Styled.CardSection>
                {open && <GuestAllergyList key={guest.id} guest={guest} />}
            </Styled.CardSection>
        </Styled.CardContainer>
    );
};

export default GuestCard;
