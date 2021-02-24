import './Skills.css'
import HtmlCss from './Img/html_css.png'
import Js from './Img/js.png'
import ReactImg from './Img/react.png'
import Node from './Img/node_js.png'
import Ruby from './Img/ruby.png'
import MondoDB from './Img/mangodb.png'
import Express from './Img/express.png'
import Sql from './Img/sql.png'


function Skills() {
    return (
        <div className="skills-container">
            <h3>Tech. Skills</h3>
            <div className="skills-txt-img">
                <div>
                    <h5>HTML & (S) CSS</h5>
                    <img src={HtmlCss} alt="html/css" />
                </div>
                <div>
                    <h5>JavaScript (ES6+)</h5>
                    <img src={Js} alt="JS" />
                </div>
                <div>
                    <h5>React</h5>
                    <img src={ReactImg} alt="react" />
                </div>
                <div>
                    <h5>Node.js</h5>
                    <img src={Node} alt="node.js" />
                </div>
                <div>
                    <h5>Ruby</h5>
                    <img src={Ruby} alt="ruby" />
                </div>
                <div>
                    <h5>MangoDB </h5>
                    <img src={MondoDB} alt="MangoDB" />
                </div>
                <div>
                    <h5>Express</h5>
                    <img src={Express} alt="Express" />
                </div>
                <div>
                    <h5>SQL</h5>
                    <img src={Sql} alt="sql" />
                </div>
            </div>
        </div>
    )
}
export default Skills