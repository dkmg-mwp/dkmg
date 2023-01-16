import Card from '../Card/Card';

type Props = {
    filteredGuest: Guest[];
    dishes: Dish[];
};

const FilteredDishes = ({ filteredGuest, dishes }: Props) => {
    const results = () => {
        // filter guests by dietary restriction
        const guestDietaryRestrictions = filteredGuest.map((guest) => {
            return {
                dairyFree: guest.dairyFree,
                glutenFree: guest.glutenFree,
                vegan: guest.vegan,
                vegetarian: guest.vegetarian,
            };
        });

        // filter dishes by dietary restriction
        const filteredDishes = dishes.filter((dish) => {
            return guestDietaryRestrictions.some((restriction) => {
                return (
                    restriction.dairyFree === dish.dairyFree &&
                    restriction.glutenFree === dish.glutenFree &&
                    restriction.vegan === dish.vegan &&
                    restriction.vegetarian === dish.vegetarian
                );
            });
        });
        return filteredDishes;
    };

    return (
        <div>
            {results().map((dish) => (
                <Card key={dish.id} dish={dish} />
            ))}
        </div>
    );
};

export default FilteredDishes;
