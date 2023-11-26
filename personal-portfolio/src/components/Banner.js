import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import desk from "../assets/img/desk.svg";
import { ArrowRightCircle } from 'react-bootstrap-icons';

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const toRotate = [ "Web Developer", "Web Designer", "UI/UX Designer" ];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } 
    else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(500);
    } 
  }

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
           
                <span className="tagline">Welcome to my Portfolio</span>
                <h1>{`Hi! I'm Rabia`} <span className="wrap">{text}</span></h1>
                <p>
                A dedicated MERN Stack developer with a passion for creating dynamic 
                and efficient web applications. Proficient in MongoDB, Express.js, 
                React.js, and Node.js, I bring a strong foundation in full-stack development, 
                coupled with a commitment to delivering high-quality and scalable solutions 
                for diverse client needs.
                </p>
                  <button onClick={() => console.log('connect')}>Let’s Connect <ArrowRightCircle size={25} /></button>

           
          </Col>
          <Col xs={12} md={6} xl={5}>
            <img src={desk} alt="Header Img"/>
          </Col>
        </Row>
      </Container>
    </section>
  )
}