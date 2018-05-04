
const initialState = {
  counter : 100,
  firstName : 'john',
  lastName : 'Doe'
}

const reducer = (state = initialState,action) => {
  if(action.type == 'INC_COUNTER') {
    return {
      ...state,
      counter : state.counter + 1
    }
  }
  return state
}


export default reducer
