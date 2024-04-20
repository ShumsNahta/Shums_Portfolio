import { Card } from 'antd';
import CartImg from '../Assets/Cart.png';
import ChatImg from '../Assets/ChatApp.png';
import SnakeImg from "../Assets/SnakeImg.png";

export default function Portfolio() {
    const { Meta } = Card;

    return (
        <>
            <div className="text-center bg-body-tertiary" id='portfolio'>
                <h1 className="h1 fw-bold pt-5">My <span className="text-warning">Portfolio</span></h1>
                <p className="text-justify pt-1">My portfolio demonstrates my capabilities as an entry-level software engineer, emphasizing skills in Java, JavaScript, and React.js. With a focus on database administration and API documentation, I strive to deliver effective solutions. Committed to growth and impact, I aim to contribute meaningfully to the field of software engineering.</p>
                <div className="d-flex flex-wrap justify-content-around mt-5">
                    <Card
                        className="mb-3"
                        hoverable
                        style={{ width: '90%', maxWidth: '300px' }}
                        cover={<img alt="Snake Game" src={SnakeImg} />}
                    >
                        <Meta title="Snake Game" />
                        <a className="text-warning" href="https://github.com/ShumsNahta/snake-game">https://github.com/ShumsNahta/snake-game</a>
                    </Card>
                    <Card
                        className="mb-3"
                        hoverable
                        style={{ width: '90%', maxWidth: '300px' }}
                        cover={<img alt="Cart App" src={CartImg} />}
                    >
                        <Meta title="Cart App" />
                        <a className="text-warning" href="https://github.com/ShumsNahta/cart-app">https://github.com/ShumsNahta/cart-app</a>
                    </Card>
                    <Card
                        className="mb-3"
                        hoverable
                        style={{ width: '90%', maxWidth: '300px' }}
                        cover={<img alt="Real Time Chat App" src={ChatImg} />}
                    >
                        <Meta title="Real Time Chat App" />
                        <a className="text-warning" href="https://github.com/ShumsNahta/Real-Time-Chat-App">https://github.com/ShumsNahta/Real-Time-Chat-App</a>
                    </Card>
                </div>
            </div>
        </>
    );
}
