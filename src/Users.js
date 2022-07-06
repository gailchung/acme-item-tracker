import React from 'react';
import { connect } from 'react-redux';
import UserForm from './UserForm';
import axios from 'axios';

const Users = ({ users, deleteUser })=> {
  return (
    <div>
      <h1>Users</h1>
      <ul>
        {
          users.map( user => {
            return (
              <li key={ user.id }>
                { user.name }
                <button onClick={ ()=> deleteUser(user) }>Delete User</button>
              </li>
            );
          })
        }
      </ul>
      <UserForm />
    </div>
  );
}
const mapDispatchToProps = (dispatch)=> {
  return {
    deleteUser: async(user)=> {
      await axios.delete(`/api/users/${user.id}`);
      dispatch({ type: 'DELETE_USER', user });
    }
  };
}

const mapStateToProps = (state)=> {
  return {
    users: state.users
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(Users);
