import React, { Component } from 'react';
// import './App.css';
import CardContainer from "./components/CardContainer";
import Navbar from "./components/Navbar";
import Title from "./components/Title";
import PokeCard from "./components/PokeCard";
import pokemon from './pokemon.json';
import shuffle from './components/shuffle';

class App extends Component {
  state = {
    pokemon,
    score: 0,
    topscore: 0,
    status: 'Click a Pokemon to Begin Game!',
    classState: "",
    statusState: ""
  }

  // TODO method for shuffling cards

  // method for changing card's 'picked' state to true if clicked
  pickedCard = id => {
    // find the index of the clicked pokemon based on the pokemon's ID using .findIndex()
    const selectedIndex = this.state.pokemon.findIndex(item => item.id === id);

    // check to see if clicked pokemon has been clicked before
    if (this.state.pokemon[selectedIndex].clicked) {
      // GAME OVER
      this.setState({
        classState: "hvr-buzz-out",
        statusState: "hvr-buzz-out text-warning",
        status: `You picked ${this.state.pokemon[selectedIndex].name} already! Try Again!`,
        pokemon: shuffle(this.state.pokemon.map(item => { item.clicked = false; return item })),
        score: 0
      });

      // reset pokemon list
      if (this.state.score > this.state.topscore) {
        this.setState({ topscore: this.state.score });
      }
    }
    else {
      // change state to true by updating pokemon list
      const tempState = this.state.pokemon.map(item => {
        if (item.id === id) {
          item.clicked = true;
        }
        return item
      })

      // increment score by 1
      this.setState({
        classState: "",
        statusState: "",
        status: `I choose you, ${this.state.pokemon[selectedIndex].name}!`,
        score: this.state.score + 1,
        pokemon: shuffle(tempState)
      }
        // set a CALLBACK to see if score reaches 12
        , function () {
          if (this.state.score === 12) {
            this.setState({
              topscore: this.state.score,
              classState: "hvr-buzz-out",
              statusState: "hvr-buzz-out text-success",
              status: `You Won! You got the max score! Let's Play Again!`,
              score: 0,
              pokemon: shuffle(this.state.pokemon.map(item => { item.clicked = false; return item }))
            });
          }

        });
    }
    // if player gets the max 12, player wins round!
  }

  componentDidMount() {
    this.setState({ pokemon: shuffle(this.state.pokemon) });

  }

  // TODO reset picked to false, score to 0 then reload cards

  // Pass a function to each card to update the Parent(App.js) state.
  render() {
    return (
      <React.Fragment>
        <Navbar statusState={this.state.statusState} status={this.state.status} score={this.state.score} topscore={this.state.topscore} />
        <div className="App container">
          <Title title="Clicky Memory Game" />
          <CardContainer className="d-flex align-items-center" classState={this.state.classState}>
            {this.state.pokemon.map(item => <PokeCard key={item.id} id={item.id} pickedCard={this.pickedCard} image={item.image} />)}
          </CardContainer>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
