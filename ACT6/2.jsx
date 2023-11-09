import React from 'react';
import GreetingCard from './GreetingCard';
import './App.css';

function App() {
  return (
    <div className="App">
      <GreetingCard
        title="Happy Birthday!"
        message="Wishing you a fantastic day!"
        buttonText="Send"
        imageSrc="PICS/HBD.jpg"
      />
      <GreetingCard
        title="Thank You!"
        message="Expressing our gratitude."
        buttonText="Share"
        imageSrc="PICS/THANKS.png"
      />
    </div>
  );
}

export default App;
