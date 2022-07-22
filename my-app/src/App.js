import React, { useState, useEffect } from 'react';
import shuffle from './utilities/shuffle';
import './App.css';
import Card from './components/Card';

function App() {

  const [cards, setCards] = useState(shuffle);
  const [pickOne, setPickOne] = useState(null);
  const [pickTwo, setPickTwo] = useState(null);
  const [disabled, setDisabled] = useState(false);
  const [wins, setWins] = useState(0);

  const handleClick = (card) => {
    if (!disabled) {
      pickOne ? setPickTwo(card) : setPickOne(card);
    }
  }

  const handleTurn = () => {
    setPickOne(null);
    setPickTwo(null);
    setDisabled(false);
  }

  useEffect(() => {
    let pickTime;

    if (pickOne && pickTwo) {

      if (pickOne.image === pickTwo.image) {
        setCards((prevCards) => {
          return prevCards.map((card) => {
            if (card.image === pickOne.image) {
              return { ...card, matched:true };
            } else {
              return card;
            }
          });
        });
        handleTurn();
      } else {

        setDisabled(true);

        pickTime = setTimeout(() => {
          handleTurn();
        }, 1000);
      
      }

    }

    return () => {
        clearTimeout(pickTime);
      };
  }, [cards, pickOne, pickTwo]);

  useEffect(() => {

    const checkWin = cards.filter((card) => !card.matched);

    if (cards.length && checkWin.length < 1) {
      console.log('You Win!');
      setWins(wins + 1);
      handleTurn();
      setCards(shuffle);
    }
  }, [cards, wins]);




  return (

    <div className="grid grid-cols-4 h-screen mx-auto p-16 gap-4">
      { cards.map((card) => {
        const { image, id, matched } = card;

        return (
          <Card
            key={id}
            image={image}
            selected={false}
            onClick={() => handleClick(card)}
          />
        )

      })}

    </div>
  );
}

export default App;
