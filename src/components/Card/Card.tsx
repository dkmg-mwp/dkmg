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
import { useSearch } from '../../routes/Search/Search.context';

const Card = () => {
    const [info, setInfo] = useState<Info>();
    const [open, setOpen] = useState(false);
    const { dishes } = useSearch();

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
            {dishes.map((dish) => (
                <CardContainer key={dish.id}>
                    <CardWrapper>
                        {/* Left section */}
                        <Wrapper>
                            <Left>
                                <CardImage src={dish.image} />
                            </Left>

                            {/* Right section */}
                            <Right>
                                <CardRatings>
                                    <RiStarFill /> <RiStarFill /> <RiStarFill />{' '}
                                    <RiStarFill />
                                </CardRatings>
                                <CardTitle>{dish.title}</CardTitle>
                            </Right>
                        </Wrapper>

                        {/* Accordian section */}
                        <CardAccordian>
                            {info ? (
                                <CardAccordianBox key={dish.id}>
                                    {info.title === dish.title && (
                                        <>
                                            <SmallButton
                                                onClick={() =>
                                                    handleInfo(dish.id)
                                                }
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
                                <SmallButton
                                    onClick={() => handleInfo(dish.id)}
                                >
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
