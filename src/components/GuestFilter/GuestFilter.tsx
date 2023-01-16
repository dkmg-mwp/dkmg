import { CardContainer, CardTitle } from './GuestFilter.styles';

const GuestFilter = ({ guest }: GuestList) => {
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
