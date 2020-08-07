import React, { PureComponent } from 'react';
import './App.css';

import Card from './Card';
import BetButton from './BetButton';

class App extends PureComponent {
  state = {
    card: null,
    deckId: null,
  };
  async componentDidMount() {
    const res = await fetch('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1')
    const deck = await res.json();

    const drawRes = await fetch(`https://deckofcardsapi.com/api/deck/${deck.deck_id}/draw/?count=1`);
    const draw = await drawRes.json();
    if (!!draw.success) {
      this.setState({ card: draw.cards[0], deckId: deck.deck_id });
    }
  }

  onBetClick = async (compare) => {
    const drawRes = await fetch(`https://deckofcardsapi.com/api/deck/${this.state.deckId}/draw/?count=1`);
    const draw = await drawRes.json();
    if (!!draw.success) {
      const newCard = draw.cards[0];
      compare(this.state.card, newCard);
      this.setState({ card: newCard });
    } else {
      alert('End of game')
    }
  };

  compareHigher = (newCard, currentCard) => {
    if (newCard.value > currentCard.value) {
      // increment score
    }
  };

  render() {
    return (
      <div className="App">
        <Card card={this.state.card}/>
        <BetButton onClick={this.onBetClick} compare={this.compareHigher}>HIGHER</BetButton>
        <BetButton>LOWER</BetButton>
      </div>
    );
  }
}

export default App;
