
import './App.css';
import { useState} from 'react';
import Timer from './components/Timer'
import ReactPlayer from 'react-player';



function App() {
  const [flag, setFlag] = useState(false);
  const [isStudy, setIsStudy] = useState(true)

  
  return (
    <div className="App">
      <div className="title">PO-FI</div>
      <div className="navbar">
        <button onClick={()=> setFlag(true)} className={flag ? "btn-mode-clicked" : "btn-mode"}>Study</button>
        <button onClick={()=> setFlag(false)} className={flag ? "btn-mode" : "btn-mode-clicked"}>Break</button>
      </div>
      <div className="container">
        <Timer time={flag ? 25*60 : 5*60} flag={flag} /> 
        
      </div>
    </div>
  );
}

export default App;
