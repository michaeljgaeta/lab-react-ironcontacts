import React, { Component } from 'react';
import contacts from './contacts.json';
import './App.css';

const ContactsInfo = (props) => {
  return (
    <div className="App">
      <table>
        <h1>Ironcontacts</h1>
        <tr>
          <th>Picture</th>
          <th>Name</th> 
          <th>Popularity</th>
        </tr>
        <tr>
          <td>{props.pictureUrl}</td>
          <td>{props.name}</td> 
          <td>{props.popularity}</td>
        </tr>
      </table>
    </div>
  );
};

class App extends Component {
  constructor() {
    super();
    this.state = {
      contacts: [
        
      ],
      contacts: contacts
    };

  sortByName() {
    const contacts = [...this.state.contacts];
    contacts.sort();
    this.setState({
      contacts: contacts
    });
  }

  sortByPopularity() {
    const contacts = [...this.state.contacts];
    contacts.sort();
    this.setState({
      contacts: contacts
    });
  }

  render() {
    const contacts = this.state.contacts;
    return (
      <div className="App">
        {this.ContactsInfo}
        <ul>{ contacts }</ul>
      </div>
    )
  };
}

export default App;