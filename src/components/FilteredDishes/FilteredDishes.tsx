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

    return (
        <div>
            {filteredDishes.map((dish) => (
                <Card key={dish.id} dish={dish} />
            ))}
        </div>
    );
};

export default FilteredDishes;
