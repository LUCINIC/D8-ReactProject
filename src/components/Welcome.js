import React from 'react';
import { Container, Carousel } from 'react-bootstrap';
import data from '../data/romance.json';
import '../styles/Welcome.css';

function Welcome() {

  return (
    <div className={`d-flex justify-content-center align-items-center vh-25`}>
      <Container className="text-center d-flex flex-column justify-content-center">
        <h1  className="card-details">Libri da lasciare a bocca aperta.</h1>
        <p  className="card-details">Benvenuti sulla mia pagina per leggere meravigliosi libri</p>
        <Carousel className="mx-auto w-75 h-50 text-center d-flex flex-column justify-content-center">
          {[0, 2, 4].map((index) => (
            <Carousel.Item key={index}>
              <div className="d-flex">
                <div className="w-50">
                  <img className="w-100" src={data[index].img} alt="First slide" />
                </div>
                <div className="w-50">
                  <img className="w-100" src={data[index + 1].img} alt="Second slide" />
                </div>
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
      </Container>
    </div>
  );
}

export default Welcome;
