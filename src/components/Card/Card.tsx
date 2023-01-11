import { RiArrowDownSLine, RiArrowUpSLine, RiStarFill } from 'react-icons/ri';
import { useState } from 'react';
import {
    CardImage,
    CardRatings,
    CardTitle,
    CardContainer,
    CardColumn,
    CardSection,
} from './Card.styles';
import axios from 'axios';
import AllergyList from '../AllergyList/AllergyList';
import { SmallButton } from '../Buttons/Button.styles';

type Props = {
    food: Food;
};

const Card = ({ food }: Props) => {
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
                <CardImage src={food.image} />
            </CardColumn>
            <CardColumn>
                <CardRatings>
                    <RiStarFill /> <RiStarFill /> <RiStarFill /> <RiStarFill />
                </CardRatings>
                <CardTitle>{food.title}</CardTitle>
                {!open ? (
                    <SmallButton primary onClick={() => getAllergies(food.id)}>
                        Allergies <RiArrowDownSLine />
                    </SmallButton>
                ) : (
                    <SmallButton onClick={() => getAllergies(food.id)}>
                        See Less <RiArrowUpSLine />
                    </SmallButton>
                )}
            </CardColumn>

            <CardSection>
                {open && allergies && (
                    <AllergyList key={food.id} allergies={allergies} />
                )}
            </CardSection>
        </CardContainer>
    );
};

export default Card;
// import { PropsWithChildren, useEffect, useState } from 'react';
// import {
//     CardImage,
//     CardTitle,
//     CardContainer,
//     CardColumn,
//     CardSection,
// } from './Card.styles';

// import Accordion from '../Accordion/Accordion';
// import {
//     ActiveAccordionButton,
//     DefaultAccordionButton,
// } from '../Buttons/Buttons';
// import axios from 'axios';

// type Props = {
//     id: number;
//     image: string;
//     title: string;
//     open: boolean;
//     children?: React.ReactNode;
//     info: Info;
// };

// const Card = ({ id, image, title, onClick, children }: Props) => {

//     return (
//         <CardContainer key={id}>
//             <CardColumn>
//                 <CardImage src={image} />
//             </CardColumn>
//             <CardColumn>
//                 <CardTitle>{title}</CardTitle>
//                 {!open ? (
//                     <DefaultAccordionButton
//                         buttonText='Allergies'
//                         onClick={() => handleInfo(id)}
//                     />
//                 ) : (
//                     <ActiveAccordionButton
//                         buttonText='See less'
//                         onClick={() => handleInfo(id)}
//                     />
//                 )}
//             </CardColumn>
//             {open && <CardSection>{children}</CardSection>}
//         </CardContainer>
//     );
// };

// export default Card;
