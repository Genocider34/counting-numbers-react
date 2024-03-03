import './App.css';
import { useState } from 'react';


function CountButton({children, onSelect}) {
  return (
    <>
      <button onClick={onSelect}>{children}</button>
    </>
  )
}



function App() {
  let [ countNumber, setCountNumber ] = useState(0);
  let count = 0;

  function addButton(){
    setCountNumber(countNumber + (count + 1));
  }

  function minusButton() {
    setCountNumber(countNumber + (count - 1));
  }

  function resetbutton() {
    count = 0;
    countNumber = count
    setCountNumber(countNumber);
  }

  
  function genRandomNumber(){
    let r = Math.floor(Math.random() * 255);
    let g = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 255);
    return [r,g,b];
  }

  return (
    <div className="container">
      <h1>{countNumber}</h1>
      <div className="button-container">
        <CountButton onSelect={() => addButton()}>Increase</CountButton>
        <CountButton onSelect={() => resetbutton()}>Reset</CountButton>
        <CountButton onSelect={() => minusButton()}>Decrease</CountButton>
      </div>
    </div>
  );
}

export default App;
