import { useProfile } from '../../routes/Profile/Profile.context';
import Heading from '../styles/Heading.styles';
import * as Styled from './LoadingOverlay.style';

export const LoadingOverlay = () => {
    const { loading } = useProfile();

    return !loading ? null : (
        <Styled.LoadingContainer>
            <Heading variant='h3'>Loading...</Heading>
        </Styled.LoadingContainer>
    );
};
