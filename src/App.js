import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [
        {
          name: 'Ember',
          id: 1
        },
        {
          name: 'Ash',
          id: 2
        },
        {
          name: 'Jamie',
          id: 3
        }
      ]
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => console.log(users))
  }
  
  render() {
    return (
      <div className="App">
        {this.state.monsters.map(monster => (
            <h1 key={ monster.id }> { monster.name }</h1>
          ))}
      </div>
    );
  }
}

export default App;
