import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import compiler from "../../Assets/Projects/sw.png";
import portfolio from "../../Assets/Projects/img.png";
import mood from "../../Assets/Projects/Mental-Health.png";
import ecommerce from "../../Assets/Projects/TECH.png";
import weatherapp from "../../Assets/Projects/weatherapp.png";
import club from "../../Assets/Projects/cll.png";
function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={mood}
              isBlog={false}
              title=" Dholi (ML)"
              description="Dholi is an AI-powered mental health support app designed to provide emotional assistance and well-being tools. Built using cutting-edge technologies like LangChain, Gemma 3B, and FastAPI, it offers personalized support, mood tracking, and interactive conversations to help users feel heard and supported anytime."
              ghLink="https://github.com/lourimi-ayoub/Agent-m7ar7er"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={[portfolio]}
              isBlog={false}
              title="Portfolio"
              description="Explore my personalized portfolio crafted with React JS, showcasing my projects, skills, and experiences. Engage with dynamic design, seamless navigation, and interactive elements, reflecting my dedication to innovation and creativity in the digital realm."
              ghLink="https://github.com/lourimi-ayoub/Portfolio"
              demoLink="https://lourimi-portfolio.vercel.app/"
            />
          </Col>

           <Col md={4} className="project-card">
            <ProjectCard
              imgPath={compiler}
              isBlog={false}
              title="sweet yokna"
              description="Sweet Yokna is a modern and user-friendly online pastry shop template designed for selling cakes, cookies, and homemade sweets. Built with HTML, CSS, JavaScript, PHP, and MySQL, it offers a smooth browsing and ordering experience, perfect for small bakery businesses or individuals looking to launch their own sweet shop online."
              ghLink="https://github.com/lourimi-ayoub/sweet-yokna"
              demoLink="https://sweet.x10.mx/"
                            
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={weatherapp}
              isBlog={false}
              title="Weather App"
              description="Welcome to the Weather App! This application allows you to search for and view weather information for any city. It displays current weather data and supports both Celsius and Fahrenheit temperature units and uses OpenWeather API to fetch the weather data."
              ghLink="https://github.com/lourimi-ayoub/Weather-App"
              demoLink="https://weather-app-fawn-iota-96.vercel.app/"
            />
          </Col>

          
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={[club]}
              isBlog={false}
              title="Club Site"
              description="Website is a dynamic and informative platform built to showcase our club’s mission, events, members, and latest updates. Designed for an engaging user experience, it helps connect students, promote activities, and grow our vibrant campus community."
              ghLink="https://github.com/lourimi-ayoub/club-website"
              demoLink="https://lourimi-ayoub.github.io/club-website/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ecommerce}
              isBlog={false}
              title="Ecommerce Website"
              description="Tech Haven is a cutting-edge PC hardware e-commerce platform featuring responsive design, secure checkout, and user accounts. Its intuitive interface includes product listings with filters, shopping cart, and admin dashboard for inventory management. Designed for the Tunisian market, it delivers a fast, device-friendly shopping experience with dark/light mode for gamers and PC builders"
              ghLink="https://github.com/lourimi-ayoub/Prodigy-InfoTech/tree/main/LandingPage"
            />
          </Col>

         


          

          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
