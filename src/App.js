import './App.css';
import React, { Component } from 'react'
import Contacts from './components/contacts';

class App extends Component {
  state= {
    contacts: []
  }

  componentDidMount() {
    //GET request to endpoint
    fetch('http://jsonplaceholder.typicode.com/users')
    //Parses the output to JSON
    .then(res => res.json())
    //Sets the value of our state to the output from the API call
    .then((data) => {
      this.setState({ contacts: data })
    })
    //Logs any errors
    .catch(console.log)
  }
  
  render() { 
    return ( 
     <Contacts contacts={ this.state.contacts }/>
      );
  }
}
 
export default App;