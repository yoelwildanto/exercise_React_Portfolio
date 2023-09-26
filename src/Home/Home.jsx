import foto from '../asset/Robin2.png'



export const Home = () => {
    return (
        <section class="home flex-center" id="home">
        <div class="home-container">
            <div class="media-icons">
                <a href="#"><i class="fa-brands fa-facebook"></i></a>
                <a href="#"><i class="fa-brands fa-instagram"></i></a>
                <a href="#"><i class="fa-brands fa-twitter"></i></a>
            </div>
            <div class="info">
                <h2>Hi, I'm Yoel Wildanto</h2>
                <div class="animated-text">
                    <h3>Front-end Developer</h3>
                    <h3>Web Designer</h3>
                    <h3>Motion Graphic Designer</h3>
                </div>
                
                <p>I create stunning website for your business, <br/>Highly experienced in web design and development.</p>
                <a href="" class="btn">Contact Me <i class="fa-solid fa-arrow-circle-right"></i></a>
            </div>
            <div class="home-img">
                <img src= {foto} alt=""/>
            </div>
        </div>
        <div>
            <img class="img-480" src={foto} alt=""/>
        </div>
    </section>
    )
}