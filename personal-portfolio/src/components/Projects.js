import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import proj1 from "../assets/img/recipe-finder.png";
import proj2 from "../assets/img/booking-system.png";
import proj3 from "../assets/img/currency-converter.png";
import proj4 from "../assets/img/real-estate.png";
import proj5 from "../assets/img/portfolio.png";
import proj6 from "../assets/img/food-delivery.png";
import web1 from "../assets/img/web1.jpeg";
import web2 from "../assets/img/web2.png";
import web3 from "../assets/img/web3.jpeg";
import tab21 from "../assets/img/tab2.1.png";
import tab22 from "../assets/img/tab2.2.png";
import tab23 from "../assets/img/tab2.3.png";
import tab24 from "../assets/img/tab2.4.png";
import tab25 from "../assets/img/tab2.5.png";
import tab26 from "../assets/img/tab2.6.png";
import tab31 from "../assets/img/tab3.1.jpg";
import tab32 from "../assets/img/tab3.2.jpg";
import tab33 from "../assets/img/tab3.3.jpg";
import tab34 from "../assets/img/tab3.4.jpg";
import tab35 from "../assets/img/tab3.5.jpg";
import tab36 from "../assets/img/tab3.6.jpg";
import colorSharp2 from "../assets/img/color-sharp2.png";


export const Projects = () => {

  const projects = [
    {
      title: "Cook-book Recipe Finder",
      description: "Design & Development",
      imgUrl: proj1,
    },
    {
      title: "Flights, Buses, Hotels Booking System",
      description: "Design & Development",
      imgUrl: proj2,
    },
    {
      title: "Currency Converter",
      description: "Design & Development",
      imgUrl: proj3,
    },
    {
      title: "Homeland Real Estate",
      description: "Design & Development",
      imgUrl: proj4,
    },
    {
      title: "Portfolio Website",
      description: "Design & Development",
      imgUrl: proj5,
    },
    {
      title: "Railfood Service Food Delivery",
      description: "Design & Development",
      imgUrl: proj6,
    },
    
  ];
  const projects2 = [
    {
      title: "Digital Clock",
      description: "Design & Development",
      imgUrl: tab21,
    },
    {
      title: "To-Do List",
      description: "Design & Development",
      imgUrl: tab22,
    },
    {
      title: "Portfolio Website",
      description: "Design & Development",
      imgUrl: tab23,
    },
    {
      title: "E-commerce Website",
      description: "Design & Development",
      imgUrl: tab24,
    },
    {
      title: "HealthCare Website",
      description: "Design & Development",
      imgUrl: tab25,
    },
    {
      title: "Festival Website",
      description: "Design & Development",
      imgUrl: tab26,
    },
    
  ];

  const projects3 = [
    {
      title: "Party Invitation",
      description: "Design & Development",
      imgUrl: tab31,
    },
    {
      title: "Movie Poster",
      description: "Design & Development",
      imgUrl: tab32,
    },
    {
      title: "App Poster",
      description: "Design & Development",
      imgUrl: tab33,
    },
    {
      title: "Food Poster",
      description: "Design & Development",
      imgUrl: tab34,
    },
    {
      title: "Celebrity Poster",
      description: "Design & Development",
      imgUrl: tab35,
    },
    {
      title: "Movie Poster",
      description: "Design & Development",
      imgUrl: tab36,
    },
    
  ];


  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
         
                <h2>Projects</h2>
                <p>A Fusion of Web Development and Graphic Design Expertise.<br /> Explore my portfolio to witness the seamless integration of captivating visuals and cutting-edge web solutions, where creativity meets functionality in every pixel and line of code.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">React/JS</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">HTML/CSS</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">UI/UX</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp">
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                    <Row>
                        {
                          projects2.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                    <Row>
                        {
                          projects3.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
