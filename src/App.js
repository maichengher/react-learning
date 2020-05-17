import React, { Component } from 'react';
import './App.css';
import Header from './header';
import List from './list';


// container components with state made by classes

class App extends Component {
// Nesting with List, use states
state = {
  users : [ 
     {name: 'MC2', age: 26, email: 'mcher@icstars.org', id: 1},
     { name: 'Billy', age: 36, email: 'billy@miles.com', id: 2},
     { name: 'Sarah', age: 27, email: 'sarahbella@tiles.com', id: 3},
    
  ]
}

  render(){
    return (

      <div>
        <h1>Subscribers Information</h1>
      <div>
        <h3>Top Subscribers</h3>
        <p>by nesting with props</p>
     
        <Header name="MC" age="26" email="her.maicheng@hotmail.com" /> 
        <Header name="Tyler" age="27" email="tylerwinner@hotmail.com" /> 
      
      </div>

      <div>
        <h3>Additional Subscribers</h3>
        <p>Nesting with lists</p>
      
        <List users={this.state.users}/>
       
      </div>
    </div>

    )
  }


}
export default App;


