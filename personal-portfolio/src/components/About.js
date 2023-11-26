import React from 'react';
import Info from './info';
import Stats from './Stats';
import { FaDownload } from 'react-icons/fa'
import { Container, Row, Col } from "react-bootstrap";
import CV from '../assets/Resume.pdf';
export const About = () => {

    return (
       
               
          <section className="sec container" id="about">
          <Container className='about'>
          <h2 className='section__title'>
                    About <span>Me</span>
                </h2>
            <Row className="align-items-center">
              <Col xs={12} md={6} xl={7} className='about__container grid'>
              <div className=' about__info info__box'>
                        <h3 className='section__subtitle'>Personal Info</h3>
                        <ul className='info__list block'>
                            <Info />
                        </ul>
                        
                        <a href={CV} download='' className='button buttonn'>
                            Download CV&nbsp;&nbsp; 
                            <span className='button__icon'>
                                <FaDownload size={25} />
                            </span>
                        </a>
                        <br />
                        <br />
                    </div>
              </Col>
              <Col xs={12} md={6} xl={5} className='stats grid'>
                <Stats />

              </Col>
            </Row>
          </Container>
        </section>
    )
}