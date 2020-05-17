import React from 'react';

// UI components without states made by funtions 
// UI function component, therefore we don't need to use class, inteade we can use function
// Also, do not need the render syntax, since it is only used for class
// Also, do not need the { Component } in the import anymore

const List = ({users}) => {
       // IF you put users in the () above, you do not need this:::::: const { users } = props;
        // using JS method call MAP.. mapping this array to a new array
        const usersList = users.map( users => {
            return (
            <div className="users" key={users.id}>
              <div>Name: {users.name}</div>
              <div>Age: {users.age}</div>
              <div>Email: {users.email}</div>
            </div>
            )
        })
        return(               
          <div className="users-list">
              { usersList }
          </div>
        )
      }

      export default List;