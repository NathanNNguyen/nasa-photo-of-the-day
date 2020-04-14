import React, { useState, useEffect } from "react";
import "./App.css";
import Card from "./Components/Card";

function App() {


  const [count, setCount] = useState(0);

  useEffect(() => {
    const newDate = new Date().setDate(new Date().getDate() + count);
    setDate(dateFormat(newDate))
    // console.log(count)
  }, [count])

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

  }

  const nextDate = (e) => {
    setCount(count + 1);
  }

  return (
    <div className="App">
      <Card date={date} previousDate={previousDate} nextDate={nextDate} />
    </div>
  );
}

export default App;
