import { CiWheat } from 'react-icons/ci';
import { RiPlantFill, RiPlantLine } from 'react-icons/ri';
import { TbMilk } from 'react-icons/tb';

import {
    CardAccordion,
    CardAccordionBox,
    CardAccordionInfo,
    ExcludeTag,
    IncludeTag,
} from './Accordion.styles';

type Props = {
    info: Info;
};

const Accordion = ({ info }: Props) => {
    return (
        <CardAccordion>
            <CardAccordionBox>
                <CardAccordionInfo>
                    {info.dairyFree ? (
                        <IncludeTag>
                            {' '}
                            <TbMilk size={30} />
                            Dairy Free: Yes
                        </IncludeTag>
                    ) : (
                        <ExcludeTag>
                            {' '}
                            <TbMilk size={30} /> Dairy Free: No{' '}
                        </ExcludeTag>
                    )}
                </CardAccordionInfo>
                <CardAccordionInfo>
                    {info.glutenFree ? (
                        <IncludeTag>
                            {' '}
                            <CiWheat size={30} /> Gluten Free: Yes
                        </IncludeTag>
                    ) : (
                        <ExcludeTag>
                            {' '}
                            <CiWheat size={30} />
                            Gluten Free: No
                        </ExcludeTag>
                    )}
                </CardAccordionInfo>
                <CardAccordionInfo>
                    {info.vegan ? (
                        <IncludeTag>
                            {' '}
                            <RiPlantFill size={30} /> Vegan: Yes
                        </IncludeTag>
                    ) : (
                        <ExcludeTag>
                            {' '}
                            <RiPlantFill size={30} /> Vegan: No
                        </ExcludeTag>
                    )}
                </CardAccordionInfo>
                <CardAccordionInfo>
                    {info.vegetarian ? (
                        <IncludeTag>
                            {' '}
                            <RiPlantLine size={30} />
                            Vegetarian: Yes
                        </IncludeTag>
                    ) : (
                        <ExcludeTag>
                            {' '}
                            <RiPlantLine size={30} /> Vegetarian: No
                        </ExcludeTag>
                    )}
                </CardAccordionInfo>
            </CardAccordionBox>
        </CardAccordion>
    );
};

export default Accordion;
