import { RiArrowDownSLine, RiArrowUpSLine } from 'react-icons/ri';
import { SmallButton } from './Button.styles';

type Props = {
    buttonText: string;
    onClick: () => void;
};
export const AccordionButton = ({ buttonText, onClick }: Props) => {
    return (
        <SmallButton onClick={onClick}>
            {buttonText} <RiArrowDownSLine />
        </SmallButton>
    );
};
