import axios from 'axios';
import { useState } from 'react';

type Props = {
    food: Food[];
};

const Cardtest = ({ food }: Props) => {
    const [info, setInfo] = useState<Info>();

    const handleInfo = async (id: number) => {
        const res = await axios.get(
            `${import.meta.env.VITE_URL_KEY}recipes/${id}/information?apiKey=${
                import.meta.env.VITE_API_KEY
            }&`
        );
        setInfo(res.data);
        return res.data;
    };

    return (
        <>
            {food.map((recipe) => (
                <div key={recipe.id}>
                    <p>{recipe.title}</p>
                    <button onClick={() => handleInfo(recipe.id)}>
                        Allergier
                    </button>

                    {info && info.title === recipe.title && (
                        <div>
                            <p>{info.dairyFree} = yes</p>
                        </div>
                    )}
                </div>
            ))}
        </>
    );
};

export default Cardtest;
