import { Checkbox } from '../Form/Form.styled';
import { CardContainer, CardTitle } from './GuestFilter.styles';

type Props = {
    guest: Guest;
    setSelectedGuest: React.Dispatch<React.SetStateAction<string[]>>;
};

const GuestFilter = ({ guest, setSelectedGuest }: Props) => {
    const handleCheck = (id: string) => {
        setSelectedGuest((prevSelectedGuests) => {
            if (prevSelectedGuests.includes(id)) {
                return prevSelectedGuests.filter((guestId) => guestId !== id);
            } else {
                return [...prevSelectedGuests, id];
            }
        });
    };

    return (
        <CardContainer>
            <CardTitle>{guest.name}</CardTitle>
            <Checkbox
                type='checkbox'
                name='guest'
                onChange={() => handleCheck(guest.id)}
            />
        </CardContainer>
    );
};

export default GuestFilter;
