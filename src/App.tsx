import axios from 'axios';

const click = async () => {
    const res = await axios.get(
        `${import.meta.env.VITE_URL_KEY}recipes/716429/information?apiKey=${
            import.meta.env.VITE_API_KEY
        }&includeNutrition=true.`
    );
    // console.log(res.data);
    console.log(res.data);
    return res;
};
function App() {
    return (
        <div className='App'>
            <button onClick={click}>click</button>
        </div>
    );
}

export default App;
