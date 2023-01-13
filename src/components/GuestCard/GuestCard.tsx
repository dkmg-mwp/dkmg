import { useState } from 'react';
import { RiArrowDownSLine, RiArrowUpSLine } from 'react-icons/ri';
import GuestAllergyList from '../GuestAllergyList/GuestAllergyList';
import {
    CardColumn,
    CardContainer,
    CardImage,
    CardSection,
    CardTitle,
} from './GuestCard.style';
import { SmallButton } from '../Buttons/Button.styles';
import { useProfile } from '../../routes/Profile/Profile.context';

type Props = {
    guest: Guest;
    setGuests: React.Dispatch<React.SetStateAction<Guest[]>>;
    setDairyFree: React.Dispatch<React.SetStateAction<boolean>>;
    setGlutenFree: React.Dispatch<React.SetStateAction<boolean>>;
    setVegan: React.Dispatch<React.SetStateAction<boolean>>;
    setVegetarian: React.Dispatch<React.SetStateAction<boolean>>;
};

const GuestCard = ({
    guest,
    setDairyFree,
    setGlutenFree,
    setVegan,
    setVegetarian,
}: Props) => {
    const { handleRemoveProfile } = useProfile();
    const [open, setOpen] = useState(false);

    const handleOnClick = () => {
        setOpen((prevState) => !prevState);
    };

    return (
        <CardContainer>
            <CardColumn>
                ICON GOES HERE
                <CardImage />
                <SmallButton
                    primary
                    onClick={() => handleRemoveProfile(guest.id)}
                >
                    Remove
                </SmallButton>
            </CardColumn>
            <CardColumn>
                <CardTitle>{guest.name}</CardTitle>
                {!open ? (
                    <SmallButton primary onClick={() => handleOnClick()}>
                        Allergies <RiArrowDownSLine />
                    </SmallButton>
                ) : (
                    <SmallButton onClick={() => handleOnClick()}>
                        See Less <RiArrowUpSLine />
                    </SmallButton>
                )}
            </CardColumn>

            <CardSection>
                {open && (
                    <GuestAllergyList
                        key={guest.id}
                        guest={guest}
                        setDairyFree={setDairyFree}
                        setGlutenFree={setGlutenFree}
                        setVegan={setVegan}
                        setVegetarian={setVegetarian}
                    />
                )}
            </CardSection>
        </CardContainer>
    );
};

export default GuestCard;
