import SearchBar from '../../components/SearchBar/SearchBar';
import { useState } from 'react';
import Card from '../../components/Card/Card';
import { Container, InnerContainer, Text } from './Search.styles';
import {
    CardAccordian,
    CardAccordianBox,
    CardAccordianInfo,
    CardContainer,
    CardImage,
    CardRatings,
    CardTitle,
    CardWrapper,
    Left,
    Right,
    SmallButton,
    Wrapper,
} from '../../components/Card/Card.styles';
import { RiStarFill } from 'react-icons/ri';

const Search = () => {
    const [food, setFood] = useState<Food[]>([]);
    console.log(food);
    return (
        <Container>
            <Text>Search recipes for your next gathering!</Text>
            <CardContainer>
                <Wrapper>
                    <Left>
                        <CardImage src='https://assets.icanet.se/e_sharpen:80,q_auto,dpr_1.25,w_718,h_718,c_lfill/imagevaultfiles/id_223426/cf_259/klassisk_lasagne.jpg'></CardImage>
                    </Left>
                    <Right>
                        <CardTitle>Lasagne</CardTitle>{' '}
                        <CardRatings>
                            <RiStarFill />
                            <RiStarFill /> <RiStarFill /> <RiStarFill />
                        </CardRatings>
                        <SmallButton>Allergies</SmallButton>
                    </Right>
                </Wrapper>
                <CardAccordian>
                    <CardAccordianBox>
                        <CardAccordianInfo>No gluten</CardAccordianInfo>
                        <CardAccordianInfo>No gluten</CardAccordianInfo>
                        <CardAccordianInfo>No gluten</CardAccordianInfo>
                        <CardAccordianInfo>No gluten</CardAccordianInfo>
                    </CardAccordianBox>
                </CardAccordian>
            </CardContainer>
            <InnerContainer>
                <SearchBar setFood={setFood} />
                <h3>Results for: </h3>
                <Card food={food} />
            </InnerContainer>
        </Container>
    );
};

export default Search;
