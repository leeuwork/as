import Nav from '../../components/Nav/Nav'
import Main from '../../components/Main/Main'
import About from '../../components/About/About'
import Projects from '../../components/Projects/Projects'
import Title from '../../components/Title/Title'
import Skills from '../../components/Skills/Skills'
import Contact from '../../components/Contact/Contact'

function Home(params) {
    return (
        <div>
            <Nav />
            <Main />
            <Title />
            <About />
            <Skills />
            <Projects />
            <Contact />
        </div>
    )
}

export default Home;