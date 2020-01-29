import React, {useState, useEffect} from 'react';
import AddThought from './AddThought';
import HomePage from './HomePage';
import Navbar from './Navbar';

function Main() {
  const [newRequest, setNewRequest] = useState(0)
  const [message, setMessage] = useState('')

useEffect(() => {
  const popUp = setTimeout(()=>{
    setMessage('')
  }, 2000)
  return () => {
    clearTimeout(popUp)
  };
}, [message])

  return (
    <main id="main">
        <Navbar />
        <AddThought  
          addRequest = {setNewRequest} 
          requestCount = {newRequest} 
          message = {message}
          setMessage = {setMessage}/>
        <HomePage 
          requestCount = {newRequest}
          setMessage = {setMessage}/>
    </main>
  );
}

export default Main;

