import Heading from '../styles/Heading.styles';
import * as Styled from './GuestFilter.styles';

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
        <Styled.CardContainer>
            <Heading variant={'h5'}>{guest.name}</Heading>
            <Styled.Checkbox
                type='checkbox'
                name='guest'
                onChange={() => {
                    handleCheck(guest.id);
                }}
            />
        </Styled.CardContainer>
    );
};

export default GuestFilter;
