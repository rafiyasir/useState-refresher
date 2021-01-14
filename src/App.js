import React, {useState} from 'react';

let counter = 0;
  
function countInitial() {
  counter++;
  console.log(`counter: ${counter}`);
  return 4;
}

function App() {

  const [count, setCount] = useState(1);
  const [count1, setCount1] = useState(2);
  const [count2, setCount2] = useState(3);
  const [count3, setCount3] = useState(countInitial());
  const [state1, setState1] = useState({count: 5, theme: "#ffff00"});
  const [state2, setState2] = useState({count: 6, theme: "#ffff00"});

  const count4 = state1.count;
  const theme1 = state1.theme;

  const count5 = state2.count;
  const theme2 = state2.theme;

  function decrementCount () {
    setCount(count-1);
  }
  function decrementCount1 () {
    setCount1(count1-1);
    setCount1(count1-1);
  }
  function decrementCount2 () {
    setCount2(prevCount => prevCount-1);
    setCount2(prevCount => prevCount-1);
  }
  function decrementCount3 () {
    setCount3(prevCount => prevCount-1);
  }
  function decrementCount4 () {
    setState1(prevState => {
      return {count: prevState.count-1}
      });
  }
  function decrementCount5 () {
    setState2(prevState => {
      return {...prevState, count: prevState.count-1}
      });
  }

  function incrementCount () {
    setCount(count+1);
  } 
  function incrementCount1 () {
    setCount1(count1+1);
    setCount1(count1+1);
  } 
  function incrementCount2 () {
    setCount2(prevCount => prevCount+1);
    setCount2(prevCount => prevCount+1);
  } 
  function incrementCount3 () {
    setCount3(prevCount => prevCount+1);
  } 
  function incrementCount4 () {
    setState1(prevState => {
      return {count: prevState.count+1}
      });
  } 
  function incrementCount5 () {
    setState2(prevState => {
      return {...prevState, count: prevState.count+1}
      });
  } 
  return (
    <>
      <h1>UseState</h1>
      <div className="App">
        <pre className="left">
          {`const [count, setCount] = useState(4);\nfunction decrementCount () {
            setCount(count-1);\n}\nfunction incrementCount () {
            setCount(count+1);\n}`}
        </pre>
        <div>
          <button className="button" onClick={decrementCount}>-</button>
          <span>{count}</span>
          <button className="button" onClick={incrementCount}>+</button>
        </div>

      </div>

      <div className="App">
        <pre className="left">
          {`const [count, setCount] = useState(4);\nfunction decrementCount () {
            setCount(count-1)
            setCount(count-1);\n}\nfunction incrementCount () {
            setCount(count+1);
            setCount(count+1);\n}`}
        </pre>
        <div>
          <button className="button" onClick={decrementCount1}>-</button>
          <span>{count1}</span>
          <button className="button" onClick={incrementCount1}>+</button>
        </div>
      </div>

      <div className="App">
        <pre className="left">
          {`const [count, setCount] = useState(4);\nfunction decrementCount () {
            setCount2(prevCount => prevCount-1);
            setCount2(prevCount => prevCount-1);\n}\nfunction incrementCount () {
              setCount2(prevCount => prevCount-1);
              setCount2(prevCount => prevCount-1);\n}`}
        </pre>
        <div>
          <button className="button" onClick={decrementCount2}>-</button>
          <span>{count2}</span>
          <button className="button" onClick={incrementCount2}>+</button>
        </div>
      </div>

      <div className="App">
        <pre className="left">
          {`const [count, setCount] = useState(countInitial());\nfunction decrementCount () {
            setCount2(prevCount => prevCount-1);\n}\nfunction incrementCount () {
              setCount2(prevCount => prevCount-1);;\n}`}
        </pre>
        <div>
          <button className="button" onClick={decrementCount3}>-</button>
          <span>{count3}</span>
          <button className="button" onClick={incrementCount3}>+</button>
        </div>
        <pre className="right">{`function countInitial() {
    counter++;
    console.log(counter:`} <span style={{color: "red", fontSize: "1rem"}}>{counter}</span>{`);
    return 4;\n}`}</pre>
      </div>

      <div className="App" style={{backgroundColor: theme1}}>
        <pre className="left">
          {`const [state1, setState1] = useState({count: 5, theme: "#ffff00"});\nfunction decrementCount () {
            setState(prevState => {
              return {count: prevState.count+1}\n});}\nfunction incrementCount () {
              setState(prevState => {
                return {count: prevState.count+1}\n});}`}
        </pre>
        <div>
          <button className="button" onClick={decrementCount4}>-</button>
          <span>{count4}</span>
          <button className="button" onClick={incrementCount4}>+</button>
        </div>
        <pre className="right">{`function countInitial() {
    counter++;
    console.log(counter:`} <span style={{color: "red", fontSize: "1rem"}}>{counter}</span>{`);
    return 4;\n}`}</pre>
      </div>

      <div className="App" style={{backgroundColor: theme2}}>
        <pre className="left">
          {`const [state1, setState1] = useState({count: 5, theme: "#ffff00"});\nfunction decrementCount () {
            setState(prevState => {
              return {...prevState, count: prevState.count+1}\n});}\nfunction incrementCount () {
              setState(prevState => {
                return {...prevState, count: prevState.count+1}\n});}`}
        </pre>
        <div>
          <button className="button" onClick={decrementCount5}>-</button>
          <span>{count5}</span>
          <button className="button" onClick={incrementCount5}>+</button>
        </div>
        <pre className="right">{`function countInitial() {
    counter++;
    console.log(counter:`} <span style={{color: "red", fontSize: "1rem"}}>{counter}</span>{`);
    return 4;\n}`}</pre>
      </div>
    </>
  );
}

export default App;
