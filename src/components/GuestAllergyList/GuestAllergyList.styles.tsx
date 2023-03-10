import { CiWheat } from 'react-icons/ci';
import { RiArrowRightLine, RiPlaneFill, RiPlantLine } from 'react-icons/ri';
import { TbMilk } from 'react-icons/tb';
import styled from 'styled-components';

export const ListSection = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
`;

export const List = styled.ul`
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
    list-style-type: none;
`;

export const ListItem = styled.li`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
`;

export const AllergyTag = styled.div<{ include?: boolean }>`
    color: ${(props) => (props.include ? 'green' : 'red')};
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
`;

export const Checkbox = styled.input`
    border-radius: 0.15em;
    border: 0.15em solid currentColor;
    color: currentColor;
    accent-color: orange;
    background-color: #fff;
`;

export const Label = styled.label``;

export const Dairy = styled(TbMilk)``;
export const Gluten = styled(CiWheat)``;
export const Vegan = styled(RiPlaneFill)``;
export const Vegetarian = styled(RiPlantLine)``;
export const ArrowRight = styled(RiArrowRightLine)``;
