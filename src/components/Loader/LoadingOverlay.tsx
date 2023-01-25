import { useProfile } from '../../routes/Profile/Profile.context';
import * as Styled from './LoadingOverlay.styles';

export const LoadingOverlay = () => {
    const { loading } = useProfile();

    return !loading ? null : (
        <Styled.LoadingContainer>
            <Styled.Circle
                src='https://i.ibb.co/vP3H2z9/orange-darkgreen.png'
                alt='MainLogo'
            />
        </Styled.LoadingContainer>
    );
};
