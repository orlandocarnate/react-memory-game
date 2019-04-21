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

  // method for shuffling cards

  // method for changing card's 'picked' state to true if clicked
  pickedCard = id => {
    // change state of pokemon picked to true
    // this.setState({
    //   pokemon: {
    //     id: id,
    //     picked: true
    //   }
    // })
    console.log(id);
    this.setState({pokemon: shuffle(this.state.pokemon)});
  }

  componentDidMount() {
    this.setState({pokemon: shuffle(this.state.pokemon)});

  }

  // reset picked to false, score to 0 then reload cards

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
