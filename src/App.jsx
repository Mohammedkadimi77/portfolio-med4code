import Section from './components/2-section/Section'
import Header from './components/1-header/Header'
import About from './components/3-about/About'
import Project from './components/4-project/Project'
import Contact from './components/5-contact/Contact'
import Footer from './components/6-footer/Footer'
function App() {
  return (
    <div className='container'>
      <Header/>
      <Section/>
      <About/>
      <Project/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App
