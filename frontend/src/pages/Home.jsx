import React from 'react'
import '../styles/home.css'
import { Container,Row,Col } from 'reactstrap'

import fort from '../assets/images/fort.png';
import world1 from '../assets/images/world1.png';
import Taj from '../assets/images/Taj.png';
import heroV from '../assets/images/heroV.mp4';
import Subtitle from '../shared/Subtitle';
import SearchBar from '../shared/SearchBar';
const Home = () => {
  return (
    <>
    <section>
    <Container>
      <Row>
        <Col lg='6'>
        <div className="hero__content">
          <div className="hero__subtitle flex items-center  ">
           <Subtitle subtitle={'know before you go'}/>
            <img src={world1} alt="w1" className='size-9'/>
          </div>
          <h1>Explore your City<span className='highlight'>
            </span></h1>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab, 
              ad? Suscipit, illo! Deleniti aliquam unde nobis itaque eaque molestias, 
              ullam laborum culpa ratione, sequi corrupti vel cum aut, eos optio?
            
            </p>
            
            
            
        </div>
        </Col>
        <Col lg='2'>
        <div className='hero__img-box'>
        <img src={fort} alt="" className=''/>
        </div>
        </Col>

        <Col lg='2'>
        <div  className='hero__img-box'>
        <video src={heroV} alt="" controls/>
        </div>
        </Col>
        <Col lg='2'>
        <div  className='hero__img-box'>
        <img src={Taj} alt="" className='w-60 h-48'/>
        </div>
        </Col>
      <SearchBar/>
      </Row>
</Container>
    </section>
    <section>
      <Container>
        <Row>
          <Col lg='3'>
          <h5 className="services__subtitle">What we do</h5>
          <h2 className="services__title">we offer .......</h2>
          </Col>
        </Row>
      </Container>
    </section>
    </>
  )
}

export default Home
