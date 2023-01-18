import Card from '../Card/Card';

type Props = {
    guests: Guest[];
    dishes: Dish[];
};

const FilteredDishes = ({ guests, dishes }: Props) => {
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
            return <>{allGuests[i]}</>;
        }
    };

    return (
        <div>
            {filteredDishes.length !== 0 ? (
                filteredDishes.map((dish) => <Card key={dish.id} dish={dish} />)
            ) : (
                <h3>
                    It seems {renderGuest()} cant eat anything! You sure you
                    want to invite them?
                </h3>
            )}
        </div>
    );
};

export default FilteredDishes;
