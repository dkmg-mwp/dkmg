import { useState } from 'react';
import { RiArrowDownSLine, RiArrowUpSLine } from 'react-icons/ri';
import GuestAllergyList from '../GuestAllergyList/GuestAllergyList';
import {
    CardColumnIcon,
    CardColumnInfo,
    CardContainer,
    CardImage,
    CardSection,
    CardTitle,
} from './GuestCard.style';
import { SmallButton } from '../Buttons/Button.styles';
import { useProfile } from '../../routes/Profile/Profile.context';

const GuestCard = ({ guest }: GuestList) => {
    const { handleRemoveGuest } = useProfile();
    const [open, setOpen] = useState(false);

    const handleOnClick = () => {
        setOpen((prevState) => !prevState);
    };

    return (
        <CardContainer>
            <CardColumnIcon>
                <CardImage src='https://i.ibb.co/2gzZF42/darkgreen-orange.png' />
                <SmallButton
                    primary
                    onClick={() => handleRemoveGuest(guest.id)}
                >
                    Remove
                </SmallButton>
            </CardColumnIcon>
            <CardColumnInfo>
                <CardTitle>{guest.name}</CardTitle>
                {!open ? (
                    <SmallButton primary onClick={() => handleOnClick()}>
                        Allergies <RiArrowDownSLine size={20}/>
                    </SmallButton>
                ) : (
                    <SmallButton onClick={() => handleOnClick()}>
                        See Less <RiArrowUpSLine size={20}/>
                    </SmallButton>
                )}
            </CardColumnInfo>

            <CardSection>
                {open && <GuestAllergyList key={guest.id} guest={guest} />}
            </CardSection>
        </CardContainer>
    );
};

export default GuestCard;
