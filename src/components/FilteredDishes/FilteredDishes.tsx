import Card from '../Card/Card';

type Props = {
    guests: Guest[];
    dishes: Dish[];
};

const FilteredDishes = ({ guests, dishes }: Props) => {
    const results = () => {
        for (let i = 0; i < guests.length; i++) {
            // if only dairy is true
            if (
                guests[i].dairyFree === true &&
                guests[i].glutenFree == false &&
                guests[i].vegan === false &&
                guests[i].vegetarian === false
            ) {
                if (!dishes) return;
                const filteredDairy = dishes.filter(
                    (dish) => dish.dairyFree != false
                );
                return filteredDairy;
            }

            // if only gluten is true
            if (
                guests[i].glutenFree === true &&
                guests[i].dairyFree == false &&
                guests[i].vegan === false &&
                guests[i].vegetarian === false
            ) {
                if (!dishes) return;
                const filteredGluten = dishes.filter(
                    (dish) => dish.glutenFree != false
                );
                return filteredGluten;
            }

            // if onlt vegan is true
            if (
                guests[i].vegan === true &&
                guests[i].glutenFree == false &&
                guests[i].dairyFree === false &&
                guests[i].vegetarian === false
            ) {
                if (!dishes) return;
                const filteredVegan = dishes.filter(
                    (dish) => dish.vegan != false
                );
                return filteredVegan;
            }

            // if only vegetarian is true
            if (
                guests[i].vegetarian === true &&
                guests[i].glutenFree == false &&
                guests[i].vegan === false &&
                guests[i].dairyFree === false
            ) {
                if (!dishes) return;
                const filteredVegetarian = dishes.filter(
                    (dish) => dish.vegetarian != false
                );
                return filteredVegetarian;
            }

            // if all are true
            if (
                guests[i].dairyFree === true &&
                guests[i].glutenFree === true &&
                guests[i].vegan === true &&
                guests[i].vegetarian === true
            ) {
                if (!dishes) return;
                const filterAllDish = dishes.filter(
                    (dish) =>
                        dish.dairyFree != false &&
                        dish.glutenFree != false &&
                        dish.vegan != false &&
                        dish.vegetarian != false
                );
                return filterAllDish;
            }

            // if dairy and gluten
            if (
                guests[i].dairyFree === true &&
                guests[i].glutenFree === true &&
                guests[i].vegan === false &&
                guests[i].vegetarian === false
            ) {
                if (!dishes) return;
                const filterDiaryGluten = dishes.filter(
                    (dish) =>
                        dish.dairyFree != false && dish.glutenFree != false
                );
                return filterDiaryGluten;
            }

            // if dairy and vegan
            if (
                guests[i].dairyFree === true &&
                guests[i].vegan === true &&
                guests[i].glutenFree === false &&
                guests[i].vegetarian === false
            ) {
                if (!dishes) return;
                const filterDairyVegan = dishes.filter(
                    (dish) => dish.dairyFree != false && dish.vegan != false
                );
                return filterDairyVegan;
            }

            // if dairy and vegetarian
            if (
                guests[i].dairyFree === true &&
                guests[i].vegetarian === true &&
                guests[i].vegan === false &&
                guests[i].glutenFree === false
            ) {
                if (!dishes) return;
                const filterDairyVegetarian = dishes.filter(
                    (dish) =>
                        dish.dairyFree != false && dish.vegetarian != false
                );
                return filterDairyVegetarian;
            }

            // if gluten and vegan
            if (
                guests[i].glutenFree === true &&
                guests[i].vegan === true &&
                guests[i].dairyFree === false &&
                guests[i].vegetarian === false
            ) {
                if (!dishes) return;
                const filterGlutenVegan = dishes.filter(
                    (dish) => dish.glutenFree != false && dish.vegan != false
                );
                return filterGlutenVegan;
            }

            // if gluten and vegetarian
            if (
                guests[i].glutenFree === true &&
                guests[i].vegetarian === true &&
                guests[i].vegan === false &&
                guests[i].dairyFree === false
            ) {
                if (!dishes) return;
                const filterGlutenVegetarain = dishes.filter(
                    (dish) =>
                        dish.glutenFree != false && dish.vegetarian != false
                );
                return filterGlutenVegetarain;
            }

            // if vegan and vegetraian
            if (
                guests[i].vegan === true &&
                guests[i].vegetarian &&
                guests[i].dairyFree === false &&
                guests[i].glutenFree === false
            ) {
                if (!dishes) return;
                const filterVeganVegetarian = dishes.filter(
                    (dish) => dish.vegan != false && dish.vegetarian != false
                );
                return filterVeganVegetarian;
            }

            // if diary, gluten and vegan
            if (
                guests[i].dairyFree === true &&
                guests[i].glutenFree === true &&
                guests[i].vegan === true &&
                guests[i].vegetarian === false
            ) {
                if (!dishes) return;
                const filterDairyGlutenVegan = dishes.filter(
                    (dish) =>
                        dish.dairyFree != false &&
                        dish.glutenFree != false &&
                        dish.vegan != false
                );
                return filterDairyGlutenVegan;
            }

            // if diary, gluten and vegetarian
            if (
                guests[i].dairyFree === true &&
                guests[i].glutenFree === true &&
                guests[i].vegetarian === true &&
                guests[i].vegan === false
            ) {
                if (!dishes) return;
                const filterDairyGlutenVegetarian = dishes.filter(
                    (dish) =>
                        dish.dairyFree != false &&
                        dish.glutenFree != false &&
                        dish.vegetarian != false
                );
                return filterDairyGlutenVegetarian;
            }

            // if diary, vegan and vegetarian
            if (
                guests[i].dairyFree === true &&
                guests[i].vegan === true &&
                guests[i].vegetarian === true &&
                guests[i].glutenFree === false
            ) {
                if (!dishes) return;
                const filterDairyVeganVegetarian = dishes.filter(
                    (dish) =>
                        dish.dairyFree != false &&
                        dish.vegan != false &&
                        dish.vegetarian != false
                );
                return filterDairyVeganVegetarian;
            }

            // if gluten, vegan and vegetarian
            if (
                guests[i].glutenFree === true &&
                guests[i].vegan === true &&
                guests[i].vegetarian === true &&
                guests[i].dairyFree === false
            ) {
                if (!dishes) return;
                const filterGlutenVeganVegetarian = dishes.filter(
                    (dish) =>
                        dish.glutenFree != false &&
                        dish.vegan != false &&
                        dish.vegetarian != false
                );
                return filterGlutenVeganVegetarian;
            }
        }
        console.log(dishes);
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
