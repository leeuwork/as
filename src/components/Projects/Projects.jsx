import './Projects.css'
import Go4petsImg from './Img/go4pets.png'
import CycleShopImg from './Img/cycleshop.png'
import Go4profitImg from './Img/go4profit.png'

function Projects() {
    return (
        <div className="projects-container-main">
            <h3>Work I've done ...</h3>
            <div className="projects-container">

                <div className="project-container">
                    <img
                        src="https://i.ibb.co/KL7crfv/Screenshot-from-2021-02-11-01-16-36.png"
                    />
                    <h5>Covid-19 Tracker</h5>
                    <p>Users can get the latest information about Covid-19 confirmed cases, deaths and recovery in the US by States.</p>
                    <div id="project-skills">
                        <h5>HTML</h5>
                        <h5>CSS</h5>
                        <h5>JavaScript</h5>
                        <h5>API</h5>
                    </div>
                    <div id="project-links">
                        <a href="https://github.com/leeuwork/covid-19">GitHub</a>
                        <a href="https://leeuwork.github.io/covid-19/">Website</a>
                    </div>
                </div>

                <div className="project-container">
                    <img
                        src={Go4petsImg}
                    />
                    <h5>Go4Pets E-Com</h5>
                    <p>A mobile-responsive e-com platform allowing users to view, create, edit and delete items for sale.</p>
                    <div id="project-skills">
                        <h5>React</h5>
                        <h5>CRUD</h5>
                        <h5>Node.js</h5>
                    </div>
                    <div id="project-links">
                        <a href="https://github.com/leeuwork/go4pets">GitHub</a>
                        <a href="https://gifted-swanson-7c7f5a.netlify.app/">Website</a>
                    </div>
                </div>

                <div className="project-container">
                    <img
                        src={CycleShopImg}
                    />
                    <h5>CycleShop</h5>
                    <p>CycleShop facilitates consumer-to-consumer sales of motorcycles through the website.
                        Full Stack application with authentication process.</p>
                    <div id="project-skills">
                        <h5>React</h5>
                        <h5>CRUD</h5>
                        <h5>Node.js</h5>
                        <h5>Express</h5>
                        <h5>MangoDB</h5>
                    </div>
                    <div id="project-links">
                        <a href="https://github.com/leeuwork/cycleshop">GitHub</a>
                        <a href="https://cycleshop.netlify.app/">Website</a>
                    </div>
                </div>

                <div className="project-container">
                    <img
                        src={Go4profitImg}
                    />
                    <h5>Go4Profit</h5>
                    <p>Bookkeeping porfolio </p>
                    <div id="project-skills">
                        <h5>HTML</h5>
                        <h5>CSS</h5>
                        <h5>PHP</h5>
                    </div>
                    <div id="project-links">
                        <a href="https://github.com/leeuwork/go4profit">GitHub</a>
                        <a href="http://go4profit.us/">Website</a>
                    </div>
                </div>


            </div>
        </div>
    )
}

export default Projects
