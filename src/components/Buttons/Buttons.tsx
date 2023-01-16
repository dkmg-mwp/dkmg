type Props = {
    value: string;
    onClick: () => void;
    type: 'submit';
};
export const AddButton = ({ value, onClick, type }: Props) => {
    return (
        <button onClick={onClick} type={type}>
            {value}
        </button>
    );
};
