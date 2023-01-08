import {
    RiArrowDropDownFill,
    RiStarFill,
    RiSubtractFill,
    RiPlantLine,
    RiPlantFill,
} from 'react-icons/ri';
import { TbMilk } from 'react-icons/tb';
import { CiWheat } from 'react-icons/ci';
import axios from 'axios';
import { useState } from 'react';
import {
    CardAccordian,
    CardAccordianBox,
    CardAccordianInfo,
    CardContainer,
    CardImage,
    CardRatings,
    CardTitle,
    CardWrapper,
    Wrapper,
    ExcludeTag,
    IncludeTag,
    Left,
    Right,
    SmallButton,
} from './Card.styles';

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

    // function toggleAccordian() {
    //     setOpen((prevState) => !prevState);

    //     console.log(open);
    // }
    return (
        <>
            {food.map((i) => (
                <CardContainer key={i.id}>
                    <CardWrapper>
                        {/* Left section */}
                        <Wrapper>
                            <Left>
                                <CardImage src={i.image} />
                            </Left>

                            {/* Right section */}
                            <Right>
                                <CardRatings>
                                    <RiStarFill /> <RiStarFill /> <RiStarFill />{' '}
                                    <RiStarFill />
                                </CardRatings>
                                <CardTitle>{i.title}</CardTitle>
                            </Right>
                        </Wrapper>

                        {/* Accordian section */}
                        <CardAccordian>
                            {info ? (
                                <CardAccordianBox key={i.id}>
                                    {info.title === i.title && (
                                        <>
                                            <SmallButton
                                                onClick={() => handleInfo(i.id)}
                                            >
                                                <RiSubtractFill size={24} />
                                            </SmallButton>

                                            <CardAccordianInfo>
                                                Dairy Free :
                                                {info.dairyFree ? (
                                                    <IncludeTag>
                                                        <TbMilk size={30} />
                                                        Yes
                                                    </IncludeTag>
                                                ) : (
                                                    <ExcludeTag>
                                                        <TbMilk size={30} />
                                                        No
                                                    </ExcludeTag>
                                                )}
                                            </CardAccordianInfo>
                                            <CardAccordianInfo>
                                                Gluten Free:
                                                {info.glutenFree ? (
                                                    <IncludeTag>
                                                        <CiWheat size={30} />
                                                        Yes
                                                    </IncludeTag>
                                                ) : (
                                                    <ExcludeTag>
                                                        <CiWheat size={30} />
                                                        No
                                                    </ExcludeTag>
                                                )}
                                            </CardAccordianInfo>
                                            <CardAccordianInfo>
                                                Vegan:
                                                {info.vegan ? (
                                                    <IncludeTag>
                                                        <RiPlantFill
                                                            size={30}
                                                        />
                                                        Yes
                                                    </IncludeTag>
                                                ) : (
                                                    <ExcludeTag>
                                                        <RiPlantFill
                                                            size={30}
                                                        />
                                                        No
                                                    </ExcludeTag>
                                                )}
                                            </CardAccordianInfo>
                                            <CardAccordianInfo>
                                                Vegetarian:
                                                {info.vegetarian ? (
                                                    <IncludeTag>
                                                        <RiPlantLine
                                                            size={30}
                                                        />
                                                        Yes
                                                    </IncludeTag>
                                                ) : (
                                                    <ExcludeTag>
                                                        <RiPlantLine
                                                            size={30}
                                                        />
                                                        No
                                                    </ExcludeTag>
                                                )}
                                            </CardAccordianInfo>
                                        </>
                                    )}
                                </CardAccordianBox>
                            ) : (
                                <SmallButton onClick={() => handleInfo(i.id)}>
                                    Allergies
                                    <RiArrowDropDownFill
                                        size={24}
                                        style={{ paddingLeft: '0.2em' }}
                                    />
                                </SmallButton>
                            )}
                        </CardAccordian>
                    </CardWrapper>
                </CardContainer>
            ))}
        </>
    );
};

export default Card;
