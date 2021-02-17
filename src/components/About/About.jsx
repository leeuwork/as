import './About.css'

function About() {
    return (
        <div className="about-container" >
            <div className="about-me-left">
                <img src="https://i.ibb.co/VHmffgR/personwithnote.png" />
            </div>
            <div className="about-me-right">
                    <h2>Who Am I</h2>
                    <p>As a software engineer, I’m eager to
                    build products that can solve social
                    issues to make a positive impact on
                    the world.
                    A little bit of my past. When I was 15
                    years old I worked in my uncle’s computer
                    repair shop. Since then I discovered the
                    wonders of computers. Most of my time I
                    performed hardware operations during my
                    work and created positive customer service
                    experience. During my associate degree I
                    took a few classes in coding because I
                    was always limited by my knowledge of
                    coding. After learning the basic concepts
                    of coding I fell in love. It’s something
                    that I can enjoy. I completed some
                    courses on youtube but it wasn’t enough for me. I started researching schools where I could go to learn coding. I discovered the General Assembly school and it was honestly the best decision in my life.
                    </p>
                    <div className="about-me-tech">
                        <h5>Technical skills</h5>
                        <div className="about-me-tech-skills" >
                            <ul>
                                <li>JavaScript (ES6+)  </li>
                                <li>React         </li>
                                <li>Node.js</li>
                                <li>Ruby</li>
                            </ul>
                            <ul>
                                <li>HTML & (S) CSS</li>
                                <li> Express</li>
                                <li>MangoDB</li>
                                <li>SQL</li>
                            </ul>
                        </div>
                    </div>
            </div>
        </div>
    )
}
export default About