import { CiWheat } from 'react-icons/ci';
import { RiArrowRightLine, RiPlaneFill, RiPlantLine } from 'react-icons/ri';
import { TbMilk } from 'react-icons/tb';
import styled from 'styled-components';

export const ListSection = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`;

export const List = styled.ul`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    list-style-type: none;
`;

export const ListItem = styled.li`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
`;

export const IncludeTag = styled.p`
    display: flex;
    justify-content: stretch;
    align-items: center;
    gap: 1em;
    padding: 10px;
    color: green;
`;

export const ExcludeTag = styled.p`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    color: red;
`;

export const Dairy = styled(TbMilk)``;
export const Gluten = styled(CiWheat)``;
export const Vegan = styled(RiPlaneFill)``;
export const Vegetarian = styled(RiPlantLine)``;
export const ArrowRight = styled(RiArrowRightLine)``;
