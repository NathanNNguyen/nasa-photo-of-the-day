import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const Container = styled.div`
  height: 70rem;
  background-image: url('https://www.nasa.gov/sites/default/files/thumbnails/image/stsci-h-p2001a-m-2000x1500_0.png');
  padding-top: 2rem;
`;

const Title = styled.h1`
  padding-top: 1.5rem;
  color: white;
`;

const Desc = styled.h5`
  font-size: 1rem;
  line-height: 3;
  padding: 2%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-weight: 500;
  color: white;
`;

const Img = styled.img`
  width: 20%;
  padding: 2%;
  transition: all .5s;
  &:hover{
    transform: scale(1.3)
    }
`;

const Flex = styled.div`
  display: flex;
`;

const Date = styled.h4`
  font-weight: 500;
  color: white;
`;

const Card = ({ date, previousDate, nextDate }) => {
  const [photo, setPhoto] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const res = await axios.get(`https://api.nasa.gov/planetary/apod?api_key=d6VskTQApM8BQeNQ7m6Tm71eqdfqpvK2rXx03hKp&date=${date}`);
      try {
        setPhoto(res.data)
      }
      catch (err) {
        console.log(err)
      }
    }
    getData();
  }, [date])

  return (
    <Container>
      <Title>{photo.title}</Title>
      <Date>{photo.date}</Date>
      <button onClick={previousDate}>Previous</button>
      <button onClick={nextDate}>Next</button>
      <Flex>
        <Img alt='img' src={photo.hdurl} />
        <Desc>{photo.explanation}</Desc>
      </Flex>
    </Container>
  )
}

export default Card