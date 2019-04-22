import React, { Component } from 'react';
// import './App.css';
import CardContainer from "./components/CardContainer";
import Navbar from "./components/navbar";
import Title from "./components/title";
import PokeCard from "./components/PokeCard";
import pokemon from './pokemon.json';
import shuffle from './components/shuffle';

class App extends Component {
  state = {
    pokemon,
    score: 0,
    topscore: 0,
    status: 'Click a Pokemon to Begin Game!'
  }

  // TODO method for shuffling cards

  // method for changing card's 'picked' state to true if clicked
  pickedCard = id => {
    // find the index of the clicked pokemon based on the pokemon's ID using .findIndex()
    const selectedIndex = this.state.pokemon.findIndex(item => item.id === id);

    // check to see if clicked pokemon has been clicked before
    if (this.state.pokemon[selectedIndex].clicked) {
      // GAME OVER
      this.setState({ status: "You picked that already! You lose!" });

      // reset pokemon list
      this.setState({ pokemon: this.state.pokemon.map(item => item.clicked = false) });
      console.log("RESET: ", this.state.pokemon);

      if (this.state.score > this.state.topscore) {
        this.setState({ topscore: this.state.score });
      }
      this.setState({ score: 0 });  // reset score to 0
    } else {
      this.setState({ status: "I choose you!" });
      // increment score by 1
      this.setState({ score: this.state.score + 1 });

      // change state to true
      const tempState = this.state.pokemon.map(item => {
        if (item.id === id) {
          item.clicked = true;
        }
        return item
      })
      this.setState({ pokemon: tempState });


    }
    this.setState({ pokemon: shuffle(this.state.pokemon) });
  }

  componentDidMount() {
    this.setState({ pokemon: shuffle(this.state.pokemon) });

  }

  // TODO reset picked to false, score to 0 then reload cards

  // Pass a function to each card to update the Parent(App.js) state.
  render() {
    return (
      <div className="App">
        <Navbar status={this.state.status} score={this.state.score} topscore={this.state.topscore} />
        <Title title="Clicky Memory Game" />
        <CardContainer>
          {this.state.pokemon.map(item => <PokeCard key={item.id} id={item.id} pickedCard={this.pickedCard} image={item.image} />)}
        </CardContainer>
      </div>
    );
  }
}

export default App;
