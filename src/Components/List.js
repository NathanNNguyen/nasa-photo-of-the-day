import React, { useEffect, useState } from 'react';
import axios from 'axios';
// import Card from './Card';

export default function List() {
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
    <div>
      <div className="title">
        <h1>{nasa.title}</h1>
        <h4>{nasa.date}</h4>
        <img alt='img' src={nasa.hdurl} />
        <h5>{nasa.explanation}</h5>
      </div>
    </div>
  )
}
