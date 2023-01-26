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
            <Styled.ContentContainer>
                <Styled.OptionText>{guest.name}</Styled.OptionText>
            </Styled.ContentContainer>
            <Styled.ContentContainer>
                <Styled.Checkbox
                    type='checkbox'
                    name='guest'
                    onChange={() => {
                        handleCheck(guest.id);
                    }}
                />
            </Styled.ContentContainer>
        </Styled.CardContainer>
    );
};

export default GuestFilter;
