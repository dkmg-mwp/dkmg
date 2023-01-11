import { RiArrowDownSLine, RiArrowUpSLine, RiStarFill } from 'react-icons/ri';
import { useState } from 'react';
import {
    CardImage,
    CardRatings,
    CardTitle,
    CardContainer,
    CardColumn,
    WhiteButton,
    SmallButton,
} from './Card.styles';
import axios from 'axios';
import Accordion from '../Accordion/Accordion';

type Props = {
    food: Food;
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
        handleOnClick();

        return res.data;
    };

    function handleOnClick() {
        setOpen((prevState) => !prevState);
    }

    return (
        <CardContainer>
            <CardColumn>
                <CardImage src={food.image} />
            </CardColumn>
            <CardColumn>
                <CardRatings>
                    <RiStarFill /> <RiStarFill /> <RiStarFill /> <RiStarFill />
                </CardRatings>
                <CardTitle>{food.title}</CardTitle>
                {!open ? (
                    <SmallButton onClick={() => handleInfo(food.id)}>
                        Allergies <RiArrowDownSLine />
                    </SmallButton>
                ) : (
                    <WhiteButton onClick={() => handleInfo(food.id)}>
                        See Less <RiArrowUpSLine />
                    </WhiteButton>
                )}
            </CardColumn>

            <div>{open && info && <Accordion key={food.id} info={info} />}</div>
        </CardContainer>
    );
};

export default Card;
