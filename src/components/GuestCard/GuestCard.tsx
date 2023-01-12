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
import { fetchGuests, removeGuest } from '../../api/dkmg-api';

type Props = {
    guest: Guest;
    setGuests: React.Dispatch<React.SetStateAction<Guest[]>>;
};

const GuestCard = ({ guest, setGuests }: Props) => {
    const [open, setOpen] = useState(false);

    const handleRemove = async (id: string) => {
        await removeGuest(id).then(() => fetchGuests().then(setGuests));
    };

    const handleOnClick = () => {
        setOpen((prevState) => !prevState);
    };

    return (
        <CardContainer>
            <CardColumn>
                ICON GOES HERE
                <CardImage />
                <SmallButton  primary onClick={() => handleRemove(guest.id)}>Remove</SmallButton>
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
                {open && <GuestAllergyList key={guest.id} guest={guest} />}
            </CardSection>
        </CardContainer>
    );
};

export default GuestCard;
