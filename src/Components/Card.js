import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import Navigation from './Navigation'

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

const Card = ({ date, previousDate, nextDate }) => {

  const [photo, setPhoto] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const res = await axios.get(`https://api.nasa.gov/planetary/apod?api_key=d6VskTQApM8BQeNQ7m6Tm71eqdfqpvK2rXx03hKp&date=${date}`);
      try {
        // console.log(res.data)
        setPhoto(res.data)
      }
      catch (err) {
        console.log(err)
      }
    }
    getData();
  }, [date])

  // useEffect(() => {
  //   axios.get(`https://api.nasa.gov/planetary/apod?api_key=d6VskTQApM8BQeNQ7m6Tm71eqdfqpvK2rXx03hKp&date=${date}`)
  //     .then(res => setPhoto(res.data))
  //     .catch(err => console.log(err))
  // }, [date])

  return (
    <Container>
      <Navigation />
      <button onClick={previousDate}>Previous</button>
      <button onClick={nextDate}>Next</button>
      <Title>{photo.title}</Title>
      <Date>{photo.date}</Date>
      <Flex>
        <Img alt='img' src={photo.hdurl} />
        <Desc>{photo.explanation}</Desc>
      </Flex>

    </Container>
  )

}

export default Card