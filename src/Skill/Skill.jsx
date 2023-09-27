import '../App.css'

export const Skills = () => {
    return (
        <section class="skills section" id="skills">
        <div class="container flex-center">
            <h1 class="section-title-01">Skills</h1>
            <h2 class="section-title-02">Skills</h2>
            <div class="content">
                {/* <!-- <div class="skills-info education-all"> --> */}
                <div class="education">
                    <h4><label>Skills</label></h4>
                    <ul class="bars">
                        <li class="bar">
                            <div class="info">
                                <span>HTML</span>
                                <span>95%</span>
                            </div>
                            <div class="line html"></div>
                        </li>
                        <li class="bar">
                            <div class="info">
                                <span>CSS</span>
                                <span>95%</span>
                            </div>
                            <div class="line css"></div>
                        </li>
                        <li class="bar">
                            <div class="info">
                                <span>Javascript</span>
                                <span>85%</span>
                            </div>
                            <div class="line javascript"></div>
                        </li>
                    </ul>
                {/* <!-- </div> --> */}
                </div>
            </div>
        </div>
    </section>
    )
}