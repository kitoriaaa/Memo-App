import { createStore } from "redux";

const initData = {
  data: [{
    message: 'sample message',
    created: new Date(),
  }],
  message: 'please type message',
  mode: 'default',
  fdata: []
};


// reducer
export function memoReducer(state = initData, action) {
  switch (action.type) {
    case 'ADD':
      return addReduce(state, action);

    case 'DELETE':
      return deleteReduce(state, action);

    case 'FIND':
      return findReduce(state, action);

    default:
      return state;
  }
}


// Add 
function addReduce(state, action) {
  let data = {
    message: action.message,
    created: new Date(),
  };
  let newdata = state.data.slice();
  newdata.unshift(data);
  return {
    data: newdata,
    message: 'Added',
    mode: 'default',
    fdata: []
  };
}


// Delete
function deleteReduce(state, action) {
  let newdata = state.data.slice();
  newdata.splice(action.index, 1);
  return {
    data: newdata,
    message: 'Delete "' + action.index + '":',
    mode: 'delete',
    fdata: []
  };
}


// Find
function findReduce(state, action) {
  let f = action.find;
  let fdata = [];
  state.data.forEach(element => {
    if (element.message.indexOf(f) >= 0) {
      fdata.push(element);
    }
  });
  return {
    data: state.data,
    message: 'Find "' + f + '":',
    mode: 'find',
    fdata: fdata,
  };
}


// Action creater
export function addMemo(text) {
  return {
    type: 'ADD',
    message: text,
  };
}


export function deleteMemo(num) {
  return {
    type: 'DELETE',
    index: num,
  };
}


export function findMemo(text) {
  return {
    type: 'FIND',
    find: text,
  };
}


export default createStore(memoReducer);
