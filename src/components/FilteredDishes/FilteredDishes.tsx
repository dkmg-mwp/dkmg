import Card from '../Card/Card';

type Props = {
    guests: Guest[];
    dishes: Dish[];
};

const FilteredDishes = ({ guests, dishes }: Props) => {
    const results = () => {
        const guest = guests.map((guest) => {
            let dairyBool = false;
            let glutenBool = false;
            let veganBool = false;
            let vegetarianBool = false;
            if (guest.dairyFree) {
                return (dairyBool = true);
            } else if (guest.glutenFree) {
                return (glutenBool = true);
            } else if (guest.vegan) {
                return (veganBool = true);
            } else if (guest.vegetarian) {
                return (vegetarianBool = true);
            } else if (!guest.dairyFree) {
                return dairyBool;
            } else if (!guest.glutenFree) {
                return glutenBool;
            } else if (!guest.vegan) {
                return veganBool;
            } else if (!guest.vegetarian) {
                return vegetarianBool;
            }
        });

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

        
        if (guest){
            return dishDairyGlutenVegetarian
        }

        // if all are true
        // if only dairy is true
        // if only gluten is true
        // if onlt vegan is true
        // if only vegetarian is true
        // if dairy and gluten
        // if dairy and vegan
        // if dairy and vegetarian
        // if gluten and vegan
        // if gluten and vegetarian
        // if vegan and vegetraian
        // if diary, gluten and vegan
        // if diary, gluten and vegetarian
        // if diary, vegan and vegetarian
        // if gluten, vegan and vegetarian
    };

    // {results().map((dish) => (
    //     <Card key={dish.id} dish={dish} />
    // ))}

    return (
        <div>
            {results()?.map((dish) => (
                <Card key={dish.id} dish={dish} />
            ))}
        </div>
    );
};

export default FilteredDishes;
