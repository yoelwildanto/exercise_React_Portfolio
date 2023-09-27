// import { Section_title } from "./components/Section-title";
import '../App.css'

export const About = () =>{
    return(
        <section class="about section" id="about">
        <div class="container flex-center">
            <h1 class="section-title-01">About Me</h1>
            <h2 class="section-title-02">About Me</h2>
            <div class="content flex-center">
               
                <div class="about-info">
                    <div class="description">
                        <h3>I'm Yoel</h3>
                        <h4>A Lead <span> Front-End Developer</span> based in <span>Yogyakarta</span></h4>
                        <p>I design and develop services for costomers specializing creating stylish, modern websites, web services and online store. My passion is to design digital user experiences through meaningful interactions. Check out my Portfolio</p>
                    </div>
                    <ul class="professional-list">
                        <li class="list-item">
                            <h3>1+</h3>
                            <span>Years of <br/>Experience</span>
                        </li>
                        <li class="list-item">
                            <h3>??K+</h3>
                            <span>Happy <br/>Customers</span>
                        </li>
                        <li class="list-item">
                            <h3>??+</h3>
                            <span>Success <br/> Projects </span>
                        </li>
                    </ul>
                    <a href="" class="btn">Download CV <i class="fa-solid fa-download"></i></a>
                </div>
            </div>
        </div>
    </section>
    )
}