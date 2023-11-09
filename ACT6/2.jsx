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
        imageSrc="https://via.placeholder.com/300"
      />
      <GreetingCard
        title="Thank You!"
        message="Expressing our gratitude."
        buttonText="Share"
        imageSrc="PICS/"
      />
    </div>
  );
}

export default App;
