import axios from 'axios';
import { useState } from 'react';

const SearchBar = ({ setFood }) => {
    const [input, setInput] = useState('');

    const handleSearch = async (search: string) => {
        const res = await axios.get(
            `${import.meta.env.VITE_URL_KEY}recipes/complexSearch?apiKey=${
                import.meta.env.VITE_API_KEY
            }&query=${search}`
        );
        setFood(res.data.results);
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
{
    /* <div /> */
}
{
    /* {food.map((i) => (
                    <div
                        key={i.id}
                        style={{ border: 'black 1px solid', margin: '10px' }}
                    >
                        <p>{i.title}</p>
                        <div onClick={() => handleInfo(i.id)}>
                            <img src={i.image} />
                            {info && (
                                <div>
                                    {info.title === i.title && (
                                        <>
                                            <p>
                                                Dairy free:
                                                {info.dairyFree ? 'yes' : 'no'}
                                            </p>
                                            <p>
                                                Gluten free:
                                                {info.glutenFree ? 'yes' : 'no'}
                                            </p>
                                            <p>
                                                Vegan:
                                                {info.vegan ? 'yes' : 'no'}
                                            </p>
                                            <p>
                                                Vegetarian:
                                                {info.vegetarian ? 'yes' : 'no'}
                                            </p>
                                        </>
                                    )}
                                </div>
                            )}
                        </div>
                    </div>
                ))}
            </div> */
}
// const [info, setInfo] = useState<Info>();
// const handleInfo = async (id: number) => {
//     const res = await axios.get(
//         `${import.meta.env.VITE_URL_KEY}recipes/${id}/information?apiKey=${
//             import.meta.env.VITE_API_KEY
//         }&`
//     );
//     setInfo(res.data);
//     return res.data;
// };
// console.log(info);
