import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';


function App() {
  
const [count, setCount] = useState(0);

useEffect(() => {
  console.log("Component mounted");
  return () => {
    console.log("Component unmounted");
  };
}, []);

useEffect(() => {
  console.log("Count updated:", count);
}, [count]);

const handleAddClick = () => {
  setCount(prevCount => prevCount + 1);
};

return (
  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center',marginTop:'50px' }}>
    <h1 style={{color:'blue', textAlign:'center'}}>{count}</h1>
    <button
     onClick={handleAddClick}
     style={{
      padding: '10px 33px',
      backgroundColor: 'white',
      border: '2px solid green',
      borderRadius: '4px',
      cursor: 'pointer',
      transition: 'background-color 0.3s ease, color 0.3s ease',
    }}
    onMouseOver={(e) => { e.target.style.backgroundColor = 'lightblue'; }}
    onMouseOut={(e) => { e.target.style.backgroundColor = 'white'; }}
    onMouseDown={(e) => { e.target.style.backgroundColor = 'blue'; e.target.style.color = 'white'; }}
    onMouseUp={(e) => { e.target.style.backgroundColor = 'lightblue'; e.target.style.color = 'black'; }}
  
     >Add</button>
  </div>

);
};

export default App;
