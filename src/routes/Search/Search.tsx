import SearchBar from '../../components/SearchBar/SearchBar';
import Card from '../../components/Card/Card';
import { Container, InnerContainer, Text } from './Search.styles';
import { useRecoilState } from 'recoil';
import { foodState } from '../../atoms/atom';

const Search = () => {
    const [food, setFood] = useRecoilState(foodState);

    return (
        <Container>
            <Text>Search recipes for your next gathering!</Text>
            <InnerContainer>
                <SearchBar food={food} setFood={setFood} />
                <h3>Results for: </h3>
                <Card food={food} />
            </InnerContainer>
        </Container>
    );
};

export default Search;
