import '../App.css'

export const Skills = () => {
    return (
        <section className="skills section" id="skills">
        <div className="container flex-center">
            <h1 className="section-title-01">Skills</h1>
            <h2 className="section-title-02">Skills</h2>
            <div className="content">
                {/* <!-- <div class="skills-info education-all"> --> */}
                <div className="education">
                    <h4><label>Skills</label></h4>
                    <ul className="bars">
                        <li className="bar">
                            <div className="info">
                                <span>HTML</span>
                                <span>95%</span>
                            </div>
                            <div className="line html"></div>
                        </li>
                        <li className="bar">
                            <div className="info">
                                <span>CSS</span>
                                <span>95%</span>
                            </div>
                            <div className="line css"></div>
                        </li>
                        <li className="bar">
                            <div className="info">
                                <span>Javascript</span>
                                <span>85%</span>
                            </div>
                            <div className="line javascript"></div>
                        </li>
                    </ul>
                {/* <!-- </div> --> */}
                </div>
            </div>
        </div>
    </section>
    )
}