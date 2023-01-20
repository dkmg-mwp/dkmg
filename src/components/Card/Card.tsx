import { RiArrowDownSLine, RiArrowUpSLine } from 'react-icons/ri';
import { useState } from 'react';
import {
    CardImage,
    CardTitle,
    CardContainer,
    CardSection,
    CardColumnInfo,
    CardColumnImage,
} from './Card.styles';
import AllergyList from '../AllergyList/AllergyList';
import { SmallButton } from '../Buttons/Button.styles';

type Props = {
    dish: Dish;
};

const Card = ({ dish }: Props) => {
    const [open, setOpen] = useState(false);

    const handleOnClick = () => {
        setOpen((prevState) => !prevState);
    };

    return (
        <CardContainer>
            <CardColumnImage>
                <CardImage src={dish.image} />
            </CardColumnImage>
            <CardColumnInfo>
                <CardTitle>{dish.title}</CardTitle>
                {!open ? (
                    <SmallButton primary onClick={() => handleOnClick()}>
                        Allergies <RiArrowDownSLine size={20} />
                    </SmallButton>
                ) : (
                    <SmallButton onClick={() => handleOnClick()}>
                        See Less <RiArrowUpSLine size={20} />
                    </SmallButton>
                )}
            </CardColumnInfo>
            <CardSection>
                {open && <AllergyList key={dish.id} dish={dish} />}
            </CardSection>
        </CardContainer>
    );
};

export default Card;
