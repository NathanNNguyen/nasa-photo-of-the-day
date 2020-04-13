import React, { useState } from "react";
import "./App.css";
import Card from "./Components/Card";

function App() {

  const [count, setCount] = useState(-1);

  const dateFormat = (date) => {
    let d = new Date(date);
    let day = d.getDate();
    let month = d.getMonth() + 1;
    let year = d.getFullYear();
    return `${year}-${month}-${day}`;
  }

  const [date, setDate] = useState(dateFormat(new Date()));

  const previousDate = () => {
    setCount(count - 1);
    console.log(count)
    const newDate = new Date().setDate(new Date().getDate() + count);
    // console.log(newDate)
    setDate(dateFormat(newDate))
  }

  const nextDate = (e) => {
    e.preventDefault()
    setCount(count + 1);
    console.log(count)
    const newDate = new Date().setDate(new Date().getDate() + count)
    setDate(dateFormat(newDate))
  }
  return (
    <div className="App">
      <Card date={date} previousDate={previousDate} nextDate={nextDate} />
    </div>
  );
}

export default App;
