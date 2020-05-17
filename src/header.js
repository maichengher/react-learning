import React, { Component } from 'react';
 

class Header extends Component{
render(){
   // console.log(this.props);
   const { name, age, email } = this.props;

  return (
     
<div>
    <div>Name: {name}</div>
    <div>Age: {age}</div>
    <div>Email: {email}</div>
</div>


    )
  }
}
  
  export default Header;