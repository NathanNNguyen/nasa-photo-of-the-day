import React, { useEffect, useState } from 'react';
import Nav from './Navigation/Nav';
import Container from './Container';
import Date from './Date';
import Flex from './Flex';
import Desc from './Flex/Desc';
import Img from './Flex/Img';
import Title from './Title';
import axios from 'axios';

export default function Card() {
  const [nasa, setNasa] = useState([]);
  const didUpdate = () => {
    axios
      .get(`https://api.nasa.gov/planetary/apod?api_key=TGqMFaRRisXXnB98NdYHgBe9cPHuu98zjYRAZHFl`)
      .then(res => {
        setNasa(res.data);
        console.log(res);
      })
      .catch(err => console.log(err));
  }
  console.log(nasa);

  useEffect(didUpdate, []);

  return (
    <Container className="title">
      <Nav></Nav>
      <Title>{nasa.title}</Title>
      <Date>{nasa.date}</Date>
      <Flex>
        <Img alt='img' src={nasa.hdurl} />
        <Desc>{nasa.explanation}</Desc>
      </Flex>
    </Container>
  )
}
