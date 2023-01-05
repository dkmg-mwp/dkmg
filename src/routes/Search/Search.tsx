import SearchBar from '../../components/SearchBar/SearchBar';
import { useState } from 'react';
// import Card from '../../components/Card/Card';

const Search = () => {
    const [food, setFood] = useState<Food[]>([]);
    console.log(food);
    return (
        <div>
            <SearchBar setFood={setFood} />
            <h5>Results for: </h5>
            {/* <Card food={food}/> */}
        </div>
    );
};

export default Search;
