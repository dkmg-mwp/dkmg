import { CardContainer, CardTitle } from './GuestFilter.styles';

const GuestFilter = ({ guest }: guestList) => {
    return (
        <CardContainer>
            <CardTitle>{guest.name}</CardTitle>
            <input
                type='checkbox'
                name=''
                defaultChecked
            />
        </CardContainer>
    );
};

export default GuestFilter;
