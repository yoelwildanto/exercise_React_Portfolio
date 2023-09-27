// import { Section_title } from "./components/Section-title";
import '../App.css'
import {BsArrowDownCircleFill} from 'react-icons/bs'

export const About = () =>{
    return(
        <section className="about section" id="about">
        <div className="container flex-center">
            <h1 className="section-title-01">About Me</h1>
            <h2 className="section-title-02">About Me</h2>
            <div className="content flex-center">
               
                <div className="about-info">
                    <div className="description">
                        <h3>I'm Yoel</h3>
                        <h4>A Lead <span> Front-End Developer</span> based in <span>Yogyakarta</span></h4>
                        <p>I design and develop services for costomers specializing creating stylish, modern websites, web services and online store. My passion is to design digital user experiences through meaningful interactions. Check out my Portfolio</p>
                    </div>
                    <ul className="professional-list">
                        <li className="list-item">
                            <h3>1+</h3>
                            <span>Years of <br/>Experience</span>
                        </li>
                        <li className="list-item">
                            <h3>??K+</h3>
                            <span>Happy <br/>Customers</span>
                        </li>
                        <li className="list-item">
                            <h3>??+</h3>
                            <span>Success <br/> Projects </span>
                        </li>
                    </ul>
                    <button className='btn'>Download CV <BsArrowDownCircleFill/> </button>
                </div>
            </div>
        </div>
    </section>
    )
}