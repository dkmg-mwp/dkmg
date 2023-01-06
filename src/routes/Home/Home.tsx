import { useState } from 'react';
import SearchBar from '../../components/SearchBar/SearchBar';

const Home = () => {
    const [food, setFood] = useState<Food[]>([]);
    return (
        <div>
            <h1>
                Friends with allergies? No worries, we’ll help you not to get
                them killed..
            </h1>
            <SearchBar setFood={setFood} />
        </div>
    );
};

export default Home;
