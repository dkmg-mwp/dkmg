import * as Styled from './FilteredDishes.styles';
import Card from '../Card/Card';
import Heading from '../styles/Heading.styles';
import { AllGuest } from '../../routes/Profile/Profile.styles';

type Props = {
    guests: Guest[];
    dishes: Dish[];
    selectedGuest: string[];
};

const FilteredDishes = ({ guests, dishes, selectedGuest }: Props) => {
    let dairyFree = false;
    let glutenFree = false;
    let vegan = false;
    let vegetarian = false;

    guests.forEach((guest) => {
        dairyFree = dairyFree || guest.dairyFree;
        glutenFree = glutenFree || guest.glutenFree;
        vegan = vegan || guest.vegan;
        vegetarian = vegetarian || guest.vegetarian;
    });

    const filteredDishes = dishes.filter((dish) => {
        return (
            (!dairyFree || dish.dairyFree) &&
            (!glutenFree || dish.glutenFree) &&
            (!vegan || dish.vegan) &&
            (!vegetarian || dish.vegetarian)
        );
    });

    const renderGuest = () => {
        const allGuests = guests.map((guest) => guest.name);
        for (let i = 0; i < allGuests.length; i++) {
            console.log(allGuests);
            return allGuests[i];
        }
    };

    if (filteredDishes.length === 0 && selectedGuest.length !== 0) {
        return (
            <Heading variant={'h3'}>
                It seems {renderGuest()} cant eat anything! You sure you want to
                invite them?
            </Heading>
        );
    }

    return (
        <Styled.FilteredResults>
            {filteredDishes.map((dish) => (
                <Card key={dish.id} dish={dish} />
            ))}
        </Styled.FilteredResults>
    );
};

export default FilteredDishes;
