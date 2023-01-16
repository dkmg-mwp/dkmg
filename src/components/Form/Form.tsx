import { RiUserAddFill } from 'react-icons/ri';
import * as Styled from './Form.styled';



const GuestForm = () => {
    return (
        <Styled.Form>
            <Styled.InputSection>
                <Styled.Input />
                <Styled.Button>
                    <RiUserAddFill size={25} />
                </Styled.Button>
            </Styled.InputSection>
            <Styled.ListSection>
                <Styled.Subtitle></Styled.Subtitle>
                <Styled.List>
                    <Styled.ListItem>
                        <Styled.Checkbox/>
                        <Styled.Label></Styled.Label>
                    </Styled.ListItem>
                </Styled.List>
            </Styled.ListSection>
        </Styled.Form>
    );
};

export default GuestForm;
