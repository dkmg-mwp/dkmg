import { CardContainer, CardTitle } from './GuestFilter.styles';

type Props = {
    guest: Guest;
    setSelectedGuest: React.Dispatch<React.SetStateAction<string>>;
};

const GuestFilter = ({ guest, setSelectedGuest }: Props) => {
    const handleCheck = (id: string) => {
        setSelectedGuest(id);
    };

    return (
        <CardContainer>
            <CardTitle>{guest.name}</CardTitle>
            <input
                type='checkbox'
                name='guest'
                onChange={() => handleCheck(guest.id)}
            />
        </CardContainer>
    );
};

export default GuestFilter;
