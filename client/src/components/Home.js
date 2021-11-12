import React, { Component } from 'react';
import Slider from 'react-slick';
import '../index.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
  Container,
  Card,
  Carousel,
  CarouselItem,
} from 'react-bootstrap'; //Navigation from bootstrap

const Home = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className='App container py-3'>
      <Card.Body>
        <Card.Title>
          <h1>YLearn</h1>
        </Card.Title>
        <Card.Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sit amet
          malesuada purus. Aliquam rhoncus neque nunc, eget ultrices augue
          porttitor ut. Vestibulum ac quam nec turpis rhoncus tempor. Donec
          ultrices consequat dui at malesuada. Maecenas lacinia sodales lectus
          eu pharetra. Donec nisi velit, pulvinar at mattis eu, volutpat vitae
          ligula. Maecenas ultricies, nulla scelerisque malesuada elementum,
          augue dui ornare nisi, at finibus justo nisl non nulla. Etiam ac
          suscipit lacus. Curabitur euismod, dui nec faucibus vulputate, lectus
          ligula semper nibh, sed finibus lectus mi ut tortor. Morbi id rutrum
          elit, mattis facilisis orci. Curabitur ac odio lacus. Proin lacinia
          orci nec pretium vulputate. Fusce non lacus quis ipsum iaculis
          blandit.
        </Card.Text>
      </Card.Body>
      <Slider {...settings}>
        <div>
          <h3>1</h3>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant='top' src='holder.js/100px180' />
            <Card.Body>
              <Card.Title>HTML</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant='primary'>Go somewhere</Button>
            </Card.Body>
          </Card>
        </div>
        <div>
          <h3>2</h3>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant='top' src='holder.js/100px180' />
            <Card.Body>
              <Card.Title>JS</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant='primary'>Go somewhere</Button>
            </Card.Body>
          </Card>
        </div>
        <div>
          <h3>3</h3>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant='top' src='holder.js/100px180' />
            <Card.Body>
              <Card.Title>Python</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant='primary'>Go somewhere</Button>
            </Card.Body>
          </Card>
        </div>
        <div>
          <h3>4</h3>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant='top' src='holder.js/100px180' />
            <Card.Body>
              <Card.Title>CSS</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant='primary'>Go somewhere</Button>
            </Card.Body>
          </Card>
        </div>
        <div>
          <h3>5</h3>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant='top' src='holder.js/100px180' />
            <Card.Body>
              <Card.Title>ReactJS</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant='primary'>Go somewhere</Button>
            </Card.Body>
          </Card>
        </div>
        <div>
          <h3>6</h3>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant='top' src='holder.js/100px180' />
            <Card.Body>
              <Card.Title>NodeJS</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant='primary'>Go somewhere</Button>
            </Card.Body>
          </Card>
        </div>
      </Slider>
    </div>
  );
};

export default Home;
