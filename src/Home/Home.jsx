import foto from '../asset/Robin2.png'
import {BsTwitter, BsInstagram, BsFacebook, BsArrowRightCircleFill} from 'react-icons/bs'
import '../App.css'




export const Home = () => {
    return (
        <section className="home flex-center" id="home">
        <div className="home-container">
            <div className="media-icons">
               <button><BsFacebook/></button>
               <button><BsInstagram/></button>
               <button><BsTwitter/></button>
            </div>
            <div className="info">
                <h2>Hi, I'm Yoel Wildanto</h2>
                <div className="animated-text">
                    <h3>Front-end Developer</h3>
                    <h3>Web Designer</h3>
                    <h3>Motion Graphic Designer</h3>
                </div>
                
                <p>I create stunning website for your business, <br/>Highly experienced in web design and development.</p>
                <button className='btn'>Contact Me <BsArrowRightCircleFill/> </button>
            </div>
            <div className="home-img">
                <img src= {foto} alt=""/>
            </div>
        </div>
        <div>
            <img className="img-480" src={foto} alt=""/>
        </div>
    </section>
    )
}