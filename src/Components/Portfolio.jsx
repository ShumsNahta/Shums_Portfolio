import ATMimg from '../Assets/ATM.png';
import ChatImg from '../Assets/ChatApp.png';
import SnakeImg from "../Assets/SnakeImg.png";
import TodoImage from '../Assets/TodoImg.png';
import ShumsPortImg from '../Assets/ShumsPortImg.png'
import CartImg from '../Assets/Cart.png'

export default function Portfolio() {

    return (
        <>
            <div className="text-center bg-body-tertiary" id='portfolio'>
                <h1 className="h1 fw-bold pt-5">My <span className="text-primary">Projects</span></h1>
                <p className="text-center pt-1">My portfolio demonstrates my capabilities as an entry-level software engineer, emphasizing skills in Java, JDBC, JavaScript, React.js, Node,js, MySQL, MongoDb. With a focus on database administration and API documentation, I strive to deliver effective solutions. Committed to growth and impact, I aim to contribute meaningfully to the field of software engineering.</p>
                <div className="d-flex flex-wrap justify-content-around mt-5">
                    <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                        <ol class="carousel-indicators">
                            <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                            <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
                            <li data-target="#carouselExampleIndicators" data-slide-to="4"></li>
                        </ol>
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <a href="https://github.com/ShumsNahta/todo-list" target='_blank'>
                                    <img className="SlideImage" src={TodoImage} alt="First slide" />
                                    <div class="carousel-caption d-none d-md-block">
                                        <h5 style={{ textDecoration: "underline" }}>Todo List</h5>
                                        <p>Designed and implemented the user interface using React and Bootstrap. Developed interactive components with React-Bootstrap for a seamless user experience. Managed state and component logic with JavaScript. Received positive feedback for user-friendly interface and functionality. mproved task management efficiency for users by 30%.</p>
                                    </div>
                                </a>
                            </div>
                            <div className="carousel-item">
                                <a href="https://github.com/ShumsNahta/bank-management-system" target='_blank'>
                                    <img className="SlideImage" src={ATMimg} alt="Second slide" />
                                    <div class="carousel-caption d-none d-md-block">
                                        <h5 style={{ textDecoration: "underline" }}>Bank Management System</h5>
                                        <p>Prepared a comprehensive Bank Management System using Java, featuring a user-friendly GUI implemented with Swing. The system facilitates the entire customer onboarding process, managing the submission of personal details, validating data inputs, and
                                            guiding users through multiple signup stages swiftly, with an average processing time of under 5 minutes per user.</p>
                                    </div>
                                </a>
                            </div>
                            <div className="carousel-item">
                                <a href="https://github.com/ShumsNahta/shumsportfolio" target='_blank'>
                                    <img className="SlideImage slide" src={ShumsPortImg} alt="Third slide" />
                                    <div class="carousel-caption d-none d-md-block">
                                        <h5 style={{ textDecoration: "underline" }}>Personal Portfolio</h5>
                                        <p>Showcased projects, skills, and experiences effectively by integrating modern UI components for an enhanced user experience. Ensured cross-browser compatibility and optimized performance. Demonstrated proficiency in front-end development and design principles. Created a dynamic, user-friendly portfolio that highlights professional achievements and technical skills through interactive elements,
                                            ensuring an engaging experience for potential employers and clients while adhering to the latest web standards and trends.</p>
                                    </div>
                                </a>
                            </div>
                            <div className="carousel-item">
                                <a href="https://github.com/ShumsNahta/snake-game" target='_blank'>
                                    <img className="SlideImage slide" src={SnakeImg} alt="Third slide" />
                                    <div class="carousel-caption d-none d-md-block">
                                        <h5 style={{ textDecoration: "underline" }}>Snake Game</h5>
                                        <p>This is a classic Snake game built using React. Players control a snake that grows in length as it consumes food while avoiding collisions with the walls or itself. The game features smooth controls and progressively increases in difficulty as the snake grows longer and moves faster.</p>
                                    </div>
                                </a>
                            </div>
                            <div className="carousel-item">
                                <a href="https://github.com/ShumsNahta/Real-Time-Chat-App" target='_blank'>
                                    <img className="SlideImage slide" src={ChatImg} alt="Third slide" />
                                    <div class="carousel-caption d-none d-md-block">
                                        <h5 style={{ textDecoration: "underline" }}>Chap Application</h5>
                                        <p>This application works same as a real time chat application.Multiple users can connect and interact with each other using this application. I used Node.js for rendering this app on the webpage and Socket.io for two-way communication. This project is yet to be completed, I still have to build a relative structure of a real time chat application.</p>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="sr-only">Previous</span>
                        </a>
                        <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="sr-only">Next</span>
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
}
