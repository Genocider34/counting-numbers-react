import './App.css';
import { useState } from 'react';


function CountButton({children, onSelect}) {
  return (
    <>
      <button  onClick={onSelect}>{children}</button>
    </>
  )
}



function App() {
  let [ countNumber, setCountNumber ] = useState(0);


  function addButton(){
    setCountNumber(countNumber+1);
  }

  function minusButton() {
    setCountNumber(countNumber-1);
  }

  function resetbutton() {
    setCountNumber(countNumber=0);
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
