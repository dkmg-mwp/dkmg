import { RiCloseFill, RiStarFill, RiSubtractFill } from 'react-icons/ri';
import axios from 'axios';
import { useState } from 'react';

type Props = {
    food: Food[];
};

const Card = ({ food }: Props) => {
    const [info, setInfo] = useState<Info>();
    const [open, setOpen] = useState(false);

    const handleInfo = async (id: number) => {
        const res = await axios.get(
            `${import.meta.env.VITE_URL_KEY}recipes/${id}/information?apiKey=${
                import.meta.env.VITE_API_KEY
            }&`
        );

        setInfo(res.data);
        return res.data;
    };

    function toggleAccordian() {
        setOpen((prevState) => !prevState);

        console.log(open);
    }
    return (
        <div>
            {food.map((i) => (
                <article
                    key={i.id}
                    style={{
                        border: 'black 1px solid',
                        margin: '10px',
                        display: 'flex',
                    }}
                >
                    <div
                        style={{
                            display: 'flex',
                            padding: '10px',
                        }}
                    >
                        {/* Left section */}
                        <div
                            style={{
                                padding: '10px',
                            }}
                        >
                            <img src={i.image} height='50px' />
                        </div>
                        {/* Center section */}
                        <div
                            style={{
                                padding: '10px',
                            }}
                        >
                            <div>
                                <RiStarFill />
                                <RiStarFill /> <RiStarFill /> <RiStarFill />
                            </div>
                            <h3>{i.title}</h3>
                        </div>
                        {/* Right section */}
                        <div
                            onClick={() => handleInfo(i.id)}
                            onChange={toggleAccordian}
                            style={{
                                padding: '10px',
                            }}
                        >
                            {open ? (
                                <RiCloseFill
                                    onClick={() => toggleAccordian()}
                                />
                            ) : (
                                <RiSubtractFill
                                    onClick={() => toggleAccordian()}
                                />
                            )}
                            {/* Accordian section */}

                            {open && info ? (
                                <div key={i.id}>
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
                            ) : (
                                !info
                            )}
                        </div>
                    </div>
                </article>
            ))}
        </div>
    );
};

export default Card;
