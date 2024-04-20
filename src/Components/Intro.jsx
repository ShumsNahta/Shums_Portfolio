import ShumsImg from "./ShumsImg1.jpeg"
import { Button } from "react-bootstrap"

export default function Intro() {
    return (
        <div className="container-fluid p-3 p-md-5 bg-body-tertiary" id="intro">
            <div className="row justify-content-center align-items-center">
                <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
                    <span className="lead">Hello,</span><br />
                    <span className="fw-bold mt-3 h1">I'm <span className="fw-bold text-warning">Shums</span> <br /> <span className="fw-bold mt-3">Junior Software Developer</span></span><br />
                    <span className="lead mt-3">A tech artisan weaving creativity into code, I craft digital symphonies, turning complex challenges into elegant solutions with a touch of innovation.</span><br />
                    <Button variant="outline-secondary mt-3">Hire Me</Button>
                </div>
                <div className="col-md-6 text-center">
                    <img src={ShumsImg} alt="" className="img-fluid rounded" />
                </div>
            </div>
        </div>
    )
}
    