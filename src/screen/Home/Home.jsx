import Nav from '../../components/Nav/Nav'
import Main from '../../components/Main/Main'
import About from '../../components/About/About'
import Projects from '../../components/Projects/Projects'

function Home(params) {
    return (
        <div>
            <Nav />
            <Main />
            <About />
            <Projects />
        </div>
    )
}

export default Home;