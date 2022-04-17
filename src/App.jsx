    import React from 'react'

    import Header from './components/header/Header'
    import Nav from './components/nav/Nav'
    import About from './components/about/About'
    import Experience from './components/experience/Experience'
    import Services from './components/Services/Services'
    import Portfolio from './components/Portfolio/Portfolio'
    import Testimonial from './components/testimonial/Testimonial'
    import Contact from './components/contact/Contact'
    import Footer from './components/footer/Footer'
    
    export const App = () => {
      return (
        <>
            <Header></Header>
            <Nav></Nav>
            <About></About>
            <Experience></Experience>
            <Services></Services>
            <Portfolio></Portfolio>
            <Testimonial></Testimonial>
            <Contact></Contact>
            <Footer></Footer>
        </>
      )
    }

    export default App;
    