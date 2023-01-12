import SearchBar from '../../components/SearchBar/SearchBar';
import { useEffect, useState } from 'react';
import Card from '../../components/Card/Card';
import {
    Container,
    H3,
    H4,
    InnerContainer,
    SearchContainer,
    SearchResult,
    TextContainer,
} from './Search.styles';

const Search = () => {
    const [food, setFood] = useState<Food[]>([]);

    useEffect(() => {
        document.title = 'Search';
    }, []);

    return (
        <Container>
            <TextContainer>
                <H3>Search recipes for your next gathering!</H3>
            </TextContainer>

            <InnerContainer>
                <SearchContainer>
                    <SearchBar setFood={setFood} />
                    <H4>Results for:</H4>
                </SearchContainer>
                <SearchResult>
                    {food.map((item) => (
                        <Card key={item.id} food={item} />
                    ))}
                </SearchResult>
            </InnerContainer>
        </Container>
    );
};

export default Search;
// import SearchBar from '../../components/SearchBar/SearchBar';
// import { useEffect, useState } from 'react';
// import Card from '../../components/Card/Card';
// import {
//     Container,
//     H3,
//     H4,
//     InnerContainer,
//     SearchContainer,
//     SearchResult,
//     TextContainer,
// } from './Search.styles';

// const Search = () => {
//     const [foods, setFoods] = useState<Food[]>([]);
//     const [info, setInfo] = useState<Info>();

//     const [open, setOpen] = useState(false);

//     function handleOnClick() {
//         setOpen((prevState) => !prevState);
//         if (typeof onClick === 'function') {
//             onClick(id);
//         }
//     }
//     const handleInfo = async (id: number) => {
//         const res = await axios.get(
//             `${import.meta.env.VITE_URL_KEY}recipes/${id}/information?apiKey=${
//                 import.meta.env.VITE_API_KEY
//             }&`
//         );
//         handleOnClick();

//         setInfo(res.data);

//         return res.data;
//     };

//     useEffect(() => {
//         if (open && !info) {
//             setInfo(info);
//         }
//     }, [open, info]);
//     return (
//         <Container>
//             <TextContainer>
//                 <H3>Search recipes for your next gathering!</H3>
//             </TextContainer>

//             <InnerContainer>
//                 <SearchContainer>
//                     <SearchBar setFood={setFoods} />
//                     <H4>Results for:</H4>
//                 </SearchContainer>
//                 <SearchResult>
//                     {foods.map((food) => {
//                         return (
//                             <Card
//                                 key={food.id}
//                                 id={food.id}
//                                 image={food.image}
//                                 title={food.title}
//                                 open={true}
//                             ></Card>
//                         );
//                     })}
//                 </SearchResult>
//             </InnerContainer>
//         </Container>
//     );
// };

// export default Search;
