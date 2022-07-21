import React, { useState } from 'react';
import shuffle from './utilities/shuffle';
import './App.css';

function App() {

  const [cards, setCards] = useState(shuffle);


  return (
    <div className="griid grid-cols-4 mx-auto">

    </div>
  );
}

export default App;
