import React, { Component } from 'react';
import { CardList } from './components/card-list/card-list.js';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      contacts: [],
      searchField: ''
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({ contacts: users }))
  }
  
  render() {
    const { contacts, searchField } = this.state;
    const filteredContacts = contacts.filter(contact => 
      contact.name.toLowerCase().includes(searchField.toLowerCase())
    );
    return (
      <div className="App">
        <input type='search' placeholder='search contacts' onChange={e => this.setState({ searchField: e.target.value})} />
        <CardList contacts={filteredContacts} />
      </div>
    );
  }
}

export default App;
