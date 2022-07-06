import { createStore } from 'redux';

const initialState = {
  view: window.location.hash.slice(1),
  users: [],
  things: []
};

const store = createStore((state = initialState, action)=> { 
  if(action.type === 'SET_THINGS'){
    return {...state, things: action.things };
  }
  if(action.type === 'SET_USERS'){
    return {...state, users: action.users }; 
  }
  if(action.type === 'SET_VIEW'){
    return {...state, view: action.view }; 
  }
  if(action.type === 'CREATE_THING'){
    return {...state, things: [...state.things, action.thing ]}; 
  }
  if(action.type === 'DELETE_THING'){
    let newThings = state.things.filter(_thing => 
     _thing.id !== action.thing.id
    );
    return {
      ...state, 
      things: newThings
    }
  }
  if(action.type === 'CREATE_USER'){
    return {...state, users: [...state.users, action.user ]}; 
  }

  if(action.type === 'DELETE_USER'){
    let newUsers = state.users.filter(_user => 
      _user.id !== action.user.id
    );
    return {
      ...state, 
      users: newUsers
    }
  }
  return state;
});

export default store;

