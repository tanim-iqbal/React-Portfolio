import React from 'react';
import Project from '../projects/Project';
import { Container, Row, Col } from 'react-bootstrap'
//Card and Array 

const cards_col1 = [
  {
    heading: 'card1',
    title: 'Gymder',
    stack: 'HTML, CSS, Javascript',
    github_url: 'https://github.com/tanim-iqbal/Gymder',
    url: 'https://kelseykodes.github.io/Gymder/',
    image: "../../assets/gymder.png",
    id: 1,
  },
  {
    heading: 'card2',
    title: 'Note Taker',
    stack: 'mySQL, Javascript, ',
    github_url: 'https://github.com/tanim-iqbal/Note-Taker',
    url: 'https://pure-springs-60544.herokuapp.com/',
    image: "../../assets/notetaker.png",
    id: 1,
  },
  {
    heading: 'card3',
    title: 'HR Management System',
    stack: 'JavaScript, CSS, HTML',
    github_url: 'https://github.com/tanim-iqbal/HR_Management_System',
    url: 'https://hrmanagement0.herokuapp.com/login',
    image: "../../assets/hrmanagement.png",
    id: 1,
  }
]


const styles = {
  container: {
    marginTop: 40,
  }
}


export default function Portfolio() {
  return (
    <Container className="vh-100 d-flex flex-column justify-content" style={styles.container}>
      <Row xs={1} md={2} className="g-4">
          <Col>
              <Project cards={cards_col1}
              />
          </Col>
        
      </Row>
    </Container>
  );
}