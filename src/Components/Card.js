import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Navigation from './Navigation';
import axios from 'axios';

const Container = styled.div`
  height: 70rem;
  background-color: palegoldenrod;
  margin: auto;
`;

const Title = styled.h1`
  padding-top: 1.5rem;
  color: black;
`;

const Desc = styled.h5`
  font-size: 1rem;
  line-height: 3;
  padding: 2%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-weight: 500;
`;

const Img = styled.img`
  width: 20%;
  padding: 2%;
`;

const Flex = styled.div`
  display: flex;
`;

const Date = styled.h4`
  font-weight: 500;
`;

export default function Card() {
  const [nasa, setNasa] = useState([]);

  useEffect(() => {
    const didUpdate = async () => {
      const res = await axios.get(`https://api.nasa.gov/planetary/apod?api_key=TGqMFaRRisXXnB98NdYHgBe9cPHuu98zjYRAZHFl`)
      try {
        setNasa(res.data);
        console.log(res);
      }
      catch (err) {
        console.log(err)
      }
    }
    didUpdate();
  }, []);

  return (
    <Container>
      <Navigation />
      <Title>{nasa.title}</Title>
      <Date>{nasa.date}</Date>
      <Flex>
        <Img alt='img' src={nasa.hdurl} />
        <Desc>{nasa.explanation}</Desc>
      </Flex>
    </Container>
  )
}
