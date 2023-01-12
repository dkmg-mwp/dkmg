import { CiWheat } from 'react-icons/ci';
import { RiPlantFill, RiPlantLine } from 'react-icons/ri';
import { TbMilk } from 'react-icons/tb';
import {
    CardAccordion,
    CardAccordionBox,
    CardAccordionInfo,
    ExcludeTag,
    IncludeTag,
} from './GuestAllergyList.style';

type Props = {
    guest: Guest;
};

const GuestAllergyList = ({ guest }: Props) => {
    return (
        <CardAccordion>
            <CardAccordionBox>
                <CardAccordionInfo>
                    {guest.dairyFree ? (
                        <IncludeTag>
                            <TbMilk size={30} />
                        </IncludeTag>
                    ) : (
                        <ExcludeTag>
                            <TbMilk size={30} />
                        </ExcludeTag>
                    )}
                </CardAccordionInfo>
                <CardAccordionInfo>
                    {guest.glutenFree ? (
                        <IncludeTag>
                            <CiWheat size={30} />
                        </IncludeTag>
                    ) : (
                        <ExcludeTag>
                            <CiWheat size={30} />
                        </ExcludeTag>
                    )}
                </CardAccordionInfo>
                <CardAccordionInfo>
                    {guest.vegan ? (
                        <IncludeTag>
                            <RiPlantFill size={30} />
                        </IncludeTag>
                    ) : (
                        <ExcludeTag>
                            <RiPlantFill size={30} />
                        </ExcludeTag>
                    )}
                </CardAccordionInfo>
                <CardAccordionInfo>
                    {guest.vegetarian ? (
                        <IncludeTag>
                            <RiPlantLine size={30} />
                        </IncludeTag>
                    ) : (
                        <ExcludeTag>
                            <RiPlantLine size={30} />
                        </ExcludeTag>
                    )}
                </CardAccordionInfo>
            </CardAccordionBox>
        </CardAccordion>
    );
};

export default GuestAllergyList;
