import './App.css';
import React, { useState } from 'react';
import ViewResult from './components/ViewResult';
/*
  1. Hämta summa från input
  2. Hämta personer från input
  3. Hämta dricks från input
  4. Räkna ut dricks från summan och addera till totala summan
  5. Räkna ut summa per person och visa
*/

function App() {
  const [sum, setSum] = useState('');
  const [people, setPeople] = useState('');
  const [tip, setTip] = useState('');
  const [result, setResult] = useState('');

  function calculateTip(sum, tip) {
    const calculatedTip = parseInt(sum) * parseFloat(tip);
    return calculatedTip;
  }

  function divideTotal(total, numberOfFriends) {
    const sumDivided = total / parseInt(numberOfFriends);
    return sumDivided;
  }

  function handleClick() {
    const calculatedTip = calculateTip(sum, tip);
    const totalSum = parseInt(sum) + calculatedTip;

    const sumToPay = divideTotal(totalSum, people);
    setResult(sumToPay);
  }

  return (
    <main className="wrapper">
      <h2>Split the nota</h2>
      <section className="form">
        <input type="number" className="form__input" onChange={ (event) => setSum(event.target.value) } />
        <input type="number" className="form__input" onChange={ (event) => setPeople(event.target.value) } />
        <input type="number" className="form__input" onChange={ (event) => setTip(event.target.value) } />
        <button className="form__button" onClick={ handleClick }>Räkna</button>
      </section>
      <ViewResult friendSum={ result } />
    </main>
  );
}

export default App;