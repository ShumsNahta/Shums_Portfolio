import ATMimg from '../Assets/ATM.png';
import ChatImg from '../Assets/ChatApp.png';
import SnakeImg from "../Assets/SnakeImg.png";

export default function Portfolio() {

    return (
        <>
            <div className="text-center bg-body-tertiary" id='portfolio'>
                <h1 className="h1 fw-bold pt-5">My <span className="text-primary">Portfolio</span></h1>
                <p className="text-center pt-1">My portfolio demonstrates my capabilities as an entry-level software engineer, emphasizing skills in Java, JavaScript, and React.js. With a focus on database administration and API documentation, I strive to deliver effective solutions. Committed to growth and impact, I aim to contribute meaningfully to the field of software engineering.</p>
                <div className="d-flex flex-wrap justify-content-around mt-5">
                    <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img className="SlideImage" src={ATMimg} alt="First slide"/>
                            </div>
                            <div className="carousel-item">
                                <img className="SlideImage" src={ChatImg} alt="Second slide"/>
                            </div>
                            <div className="carousel-item">
                                <img className="SlideImage slide" src={SnakeImg} alt="Third slide"/>
                            </div>
                        </div>
                        <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="sr-only">Previous</span>
                        </a>
                        <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="sr-only">Next</span>
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
}
