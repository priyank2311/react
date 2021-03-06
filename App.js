import React, { Component } from 'react';
import classes from './App.css';
import Persons from '../store/Persons/Persons';
import Cockpit from '../store/Cockpit/Cockpit';


class App extends Component {
  constructor(props){
    super(props);
    console.log('[App.js] constructor');
  }

    state = {
      persons: [
        {id:'xyz', name: 'Max', age: 28},
        {id:'yzx', name: 'Steve', age: 20},
        {id:'zxy', name: 'Bob', age: 15},
      ],
      otherSate: 'some other value',
      showPersons: false
    }

    static getDerivedStateFromProps(props, state){
      console.log('[App.js] getDerivedStateFromProps', props);
      return state;
    }

    componentDidMount() {
      console.log('[App.js] componentDidMount');
    }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex( p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    person.name= event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;
    this.setState( {persons: persons} );
  }

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.slice(personIndex, 1);
    this.setState({persons: persons});
  }


  togglePersonHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons : !doesShow});
  }


   render () {
    console.log('[App.js] render');
    let persons = null;
    if (this.state.showPersons){
      persons =
        <Persons persons={this.state.persons} clicked={this.deletePersonHandler} changed={this.nameChangedHandler} />;
    }

     return (
       <div className="App">
       <Cockpit title={this.props.appTitle} showPersons={this.state.showPersons} persons={this.state.persons} clicked={this.togglePersonHandler} />
         {persons}
       </div>
     );
  }
}

export default App;
