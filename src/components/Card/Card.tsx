import { RiArrowDownSLine, RiArrowUpSLine } from 'react-icons/ri';
import { useState } from 'react';
import {
    CardImage,
    CardTitle,
    CardContainer,
    CardColumn,
    CardSection,
} from './Card.styles';
import axios from 'axios';
import AllergyList from '../AllergyList/AllergyList';
import { SmallButton } from '../Buttons/Button.styles';

type Props = {
    dish: Dish;
};

const Card = ({ dish }: Props) => {
    const [allergies, setAllergies] = useState<Allergies>();
    const [open, setOpen] = useState(false);

    const getAllergies = async (id: number) => {
        const res = await axios.get(
            `${import.meta.env.VITE_URL_KEY}recipes/${id}/information?apiKey=${
                import.meta.env.VITE_API_KEY
            }&`
        );
        setAllergies(res.data);
        handleOnClick();
        return res.data;
    };

    function handleOnClick() {
        setOpen((prevState) => !prevState);
    }

    return (
        <CardContainer>
            <CardColumn>
                <CardImage src={dish.image} />
            </CardColumn>
            <CardColumn>
                <CardTitle>{dish.title}</CardTitle>
                {!open ? (
                    <SmallButton primary onClick={() => getAllergies(dish.id)}>
                        Allergies <RiArrowDownSLine />
                    </SmallButton>
                ) : (
                    <SmallButton onClick={() => getAllergies(dish.id)}>
                        See Less <RiArrowUpSLine />
                    </SmallButton>
                )}
            </CardColumn>

            <CardSection>
                {open && allergies && (
                    <AllergyList key={dish.id} allergies={allergies} />
                )}
            </CardSection>
        </CardContainer>
    );
};

export default Card;
