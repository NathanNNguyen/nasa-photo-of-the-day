import React from 'react';

const Card = props => {
  return (
    <div className="title">
      <h2>{props.data.title}</h2>
      <p>{props.data.date}</p>
      <p>{props.data.hdurl}</p>
      <p>{props.data.explanation}</p>
    </div>
  )
}

export default Card;