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
    score: 0
  }

  // TODO method for shuffling cards

  // method for changing card's 'picked' state to true if clicked
  pickedCard = id => {
    // change state of pokemon picked to true
    // this.setState({
    // this.setState(this.state.pokemon[id]['clicked'] = true);
    const selectedIndex = this.state.pokemon.findIndex( item => item.id === id);

    // change state to true
    this.state.pokemon[selectedIndex].clicked = true;
    // console.log("Clicked pokemon: ", this.state.pokemon[selectedIndex]);
    // console.log("Clicked state: ", this.state.pokemon[selectedIndex].clicked);
    console.log("Clicked pokemon to True: ", this.state.pokemon.filter( item => item.clicked === true));
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
        <Navbar />
        <Title title="Clicky Memory Game" />
        <CardContainer>
          {this.state.pokemon.map(item => <PokeCard key={item.id} id={item.id} pickedCard={this.pickedCard} image={item.image} />)}
        </CardContainer>
      </div>
    );
  }
}

export default App;
