import React, { useState } from 'react';
import shuffle from './utilities/shuffle';
import './App.css';
import Card from './components/Card';

function App() {

  const [cards, setCards] = useState(shuffle);


  return (
    <div className='flex flex-row w-full h-screen'>
    <div className="grid grid-cols-4 mx-auto px-2 gap-4 h-1/2">
      { cards.map((card) => {
        const { image, id, matched } = card

        return (
          <Card
            key={id}
            image={image}
            selected={false}
            onClock={() => {}}
          />
        )

      })}

    </div>
    </div>
  );
}

export default App;
