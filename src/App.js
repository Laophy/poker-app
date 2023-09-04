import { useEffect, useState } from 'react';
import './App.css';
import Deck from './data/cards'

function App() {
  const [deck, setDeck] = useState([]);

  useEffect(() => {
    const newDeck = [];
    for (let i = 0; i < 5; i++) {
      newDeck.push((Math.random() * (51 - 1) + 1).toFixed(0))
    }

    setDeck(newDeck);
  }, [])

  const shuffleDeck = () => {
    const newDeck = [];
    for (let i = 0; i < 5; i++) {
      newDeck.push((Math.random() * (51 - 1) + 1).toFixed(0))
    }

    setDeck(newDeck);
  }

  return (
    <div className="App">
      <div style={{ marginLeft: 'auto', marginRight: 'auto', display: 'flex', justifyContent: 'center', marginTop: '15%' }}>
        <img src={require(`./images/Casino Poker UI/PNG Files/Table.png`)} alt='playing card' style={{ top: -100, position: 'absolute', zIndex: -1 }} />
        <button className="button-5" style={{ backgroundColor: '#d74049' }} onClick={() => shuffleDeck()}>Shuffle</button>
        {deck?.map((card, index) => {
          return <img src={require(`./images/cards/${Deck.deck[+card]?.image}`)} alt='playing card' width={150} height={200} key={card + index} style={{ margin: 5 }} />
        })}
      </div>
      <div style={{ marginLeft: 'auto', marginRight: 'auto', display: 'flex', justifyContent: 'center' }}>
        <button className="button-5" style={{ backgroundColor: 'rgb(87 183 46)' }} onClick={() => alert('Check!')}>Check</button>
        <button className="button-5" style={{ backgroundColor: '#d74049' }} onClick={() => alert('Fold!')}>Fold</button>
      </div>
    </div>
  );
}

export default App;
