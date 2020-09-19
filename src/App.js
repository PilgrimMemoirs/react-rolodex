import React, { Component } from 'react';
import { CardList } from './components/card-list/card-list.js';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      contacts: []
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({ contacts: users }))
  }
  
  render() {
    return (
      <div className="App">
      <CardList name="Jamie">
        {this.state.contacts.map(contact => (
          <h1 key={ contact.id }> { contact.name }</h1>
        ))}
      </CardList>

      </div>
    );
  }
}

export default App;
