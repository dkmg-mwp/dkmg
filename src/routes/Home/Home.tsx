import SearchBar from '../../components/SearchBar/SearchBar';
import { Title, Container, SearchBarSection, Wrapper } from './Home.styles';
import { useRecoilState } from 'recoil';
import { foodState } from '../../atoms/atom';

const Home = () => {
    const [food, setFood] = useRecoilState(foodState);

    return (
        <Container>
            <Wrapper>
                <Title>
                    Friends with allergies? No worries, we’ll help you not to
                    get them killed...
                </Title>
                <SearchBarSection>
                    <SearchBar food={food} setFood={setFood} />
                </SearchBarSection>
            </Wrapper>
        </Container>
    );
};

export default Home;
