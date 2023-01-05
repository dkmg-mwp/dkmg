import { RiStarFill, RiSubtractFill } from 'react-icons/ri';

const Card = () => {
    return (
        <article
            style={{
                border: 'black 1px solid',
                margin: '10px',
                display: 'flex',
            }}
        >
            <div
                style={{
                    display: 'flex',
                    padding: '10px',
                }}
            >
                {/* Left section */}
                <div
                    style={{
                        padding: '10px',
                    }}
                >
                    <img
                        src='https://keviniscooking.com/wp-content/uploads/2020/05/Homemade-Italian-Lasagna-square-750x750.jpg'
                        height='50px'
                    />
                </div>
                {/* Center section */}
                <div
                    style={{
                        padding: '10px',
                    }}
                >
                    <div>
                        <RiStarFill />
                        <RiStarFill /> <RiStarFill /> <RiStarFill />
                    </div>
                    <h3>Lasagna</h3>
                </div>
                {/* Right section */}
                <div
                    style={{
                        padding: '10px',
                    }}
                >
                    <RiSubtractFill />
                </div>
            </div>
        </article>
    );
};

export default Card;
