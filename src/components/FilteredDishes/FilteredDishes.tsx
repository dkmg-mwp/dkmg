import Card from '../Card/Card';

type Props = {
    guests: Guest[];
    dishes: Dish[];
};

const FilteredDishes = ({ guests, dishes }: Props) => {
    const results = () => {
        //filtered dishes
        const dishAll = dishes
            .filter((dish) => dish.dairyFree)
            .filter((dish) => dish.glutenFree)
            .filter((dish) => dish.vegan)
            .filter((dish) => dish.vegetarian);
        const dishDairy = dishes.filter((dish) => dish.dairyFree);
        const dishGluten = dishes.filter((dish) => dish.glutenFree);
        const dishVegan = dishes.filter((dish) => dish.vegan);
        const dishVegetarian = dishes.filter((dish) => dish.vegetarian);
        const dishDairyGluten = dishes
            .filter((dish) => dish.dairyFree)
            .filter((dish) => dish.glutenFree);
        const dishDairyVegan = dishes
            .filter((dish) => dish.dairyFree)
            .filter((dish) => dish.vegan);
        const dishDairyVegetarain = dishes
            .filter((dish) => dish.dairyFree)
            .filter((dish) => dish.vegetarian);
        const dishGlutenVegan = dishes
            .filter((dish) => dish.glutenFree)
            .filter((dish) => dish.vegan);
        const dishGlutenVegetarian = dishes
            .filter((dish) => dish.glutenFree)
            .filter((dish) => dish.vegetarian);
        const dishVeganVegetarian = dishes
            .filter((dish) => dish.vegan)
            .filter((dish) => dish.vegetarian);
        const dishDairyGlutenVegan = dishes
            .filter((dish) => dish.dairyFree)
            .filter((dish) => dish.glutenFree)
            .filter((dish) => dish.vegan);
        const dishDairyGlutenVegetarian = dishes
            .filter((dish) => dish.dairyFree)
            .filter((dish) => dish.glutenFree)
            .filter((dish) => dish.vegetarian);
        const dishDairyVeganVegetarian = dishes
            .filter((dish) => dish.dairyFree)
            .filter((dish) => dish.vegan)
            .filter((dish) => dish.vegetarian);
        const dishGlutenVeganVegetarian = dishes
            .filter((dish) => dish.glutenFree)
            .filter((dish) => dish.vegan)
            .filter((dish) => dish.vegetarian);

        // filterd guests
        const dairyguest = guests.some(function (element) {
            return element.dairyFree;
        });

        const glutenGuest = guests.some(function (element) {
            return element.glutenFree;
        });

        const veganGuest = guests.some(function (element) {
            return element.vegan;
        });

        const vegetarianGuest = guests.some(function (element) {
            return element.vegetarian;
        });

        //Guests and dish combos
        // if no restrictions
        if (!dairyguest && !glutenGuest && !veganGuest && !vegetarianGuest) {
            return dishes;
        } // if only dairy is true
        else if (
            dairyguest &&
            !glutenGuest &&
            !veganGuest &&
            !vegetarianGuest
        ) {
            return dishDairy;
        } // if onlt gluten is true
        else if (
            !dairyguest &&
            glutenGuest &&
            !veganGuest &&
            !vegetarianGuest
        ) {
            return dishGluten;
        } // if onlt vegan is true
        else if (
            !dairyguest &&
            !glutenGuest &&
            veganGuest &&
            !vegetarianGuest
        ) {
            return dishVegan;
        } // if only vegetarian is true
        else if (
            !dairyguest &&
            !glutenGuest &&
            !veganGuest &&
            vegetarianGuest
        ) {
            return dishVegetarian;
        } // if dairy and gluten
        else if (dairyguest && glutenGuest && !veganGuest && !vegetarianGuest) {
            return dishDairyGluten;
        } // if dairy and vegan
        else if (dairyguest && !glutenGuest && veganGuest && !vegetarianGuest) {
            return dishDairyVegan;
        } // if dairy and vegetarian
        else if (dairyguest && !glutenGuest && !veganGuest && vegetarianGuest) {
            return dishDairyVegetarain;
        } // if gluten and vegan
        else if (!dairyguest && glutenGuest && veganGuest && !vegetarianGuest) {
            return dishGlutenVegan;
        } // if gluten and vegetarian
        else if (!dairyguest && glutenGuest && !veganGuest && vegetarianGuest) {
            return dishGlutenVegetarian;
        } // if vegan and vegetraian
        else if (!dairyguest && !glutenGuest && veganGuest && vegetarianGuest) {
            return dishVeganVegetarian;
        } // if diary, gluten and vegan
        else if (dairyguest && glutenGuest && veganGuest && !vegetarianGuest) {
            return dishDairyGlutenVegan;
        } // if diary, gluten and vegetarian
        else if (dairyguest && glutenGuest && !veganGuest && vegetarianGuest) {
            return dishDairyGlutenVegetarian;
        } // if diary, vegan and vegetarian
        else if (dairyguest && !glutenGuest && veganGuest && vegetarianGuest) {
            return dishDairyVeganVegetarian;
        } // if gluten, vegan and vegetarian
        else if (!dairyguest && glutenGuest && veganGuest && vegetarianGuest) {
            return dishGlutenVeganVegetarian;
        } // if all are true
        else if (dairyguest && glutenGuest && veganGuest && vegetarianGuest) {
            return dishAll;
        }
    };

    return (
        <div>
            {results()?.map((dish) => (
                <Card key={dish.id} dish={dish} />
            ))}
        </div>
    );
};

export default FilteredDishes;
