import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

type Props = {
    food: Food[];
    setFood: React.Dispatch<React.SetStateAction<Food[]>>;
};

const SearchBar = ({ food, setFood }: Props) => {
    const [input, setInput] = useState('');
    const navigate = useNavigate();

    const handleSearch = async (search: string) => {
        const res = await axios.get(
            `${import.meta.env.VITE_URL_KEY}recipes/complexSearch?apiKey=${
                import.meta.env.VITE_API_KEY
            }&query=${search}`
        );
        setFood(res.data.results);
        if (food.length != 0) {
            navigate('/search');
        }
        return res.data;
    };

    return (
        <div className='App'>
            <input
                type='text'
                value={input}
                onChange={(e) => setInput(e.target.value)}
            />
            <button onClick={() => handleSearch(input)}>click</button>
        </div>
    );
};

export default SearchBar;
