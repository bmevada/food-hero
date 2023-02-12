const initialState = {
    items: [],
    token: {},
    logged: false,
  }
  
  const reducer = (state, action) => {
  
    const { payload } = action;
  
    switch (action.type) {
      case 'ADD_TO_CART':
        return {
          ...state,
          items: payload,
        }
  
      case 'Token_To_Generate':
        let temp = action.payload
        return {
          ...state,
          token: temp,
          logged: true
        }
  
      case 'REMOVE_TOKEN':
        let tempToken = {}
        return {
          ...state,
          token: tempToken,
          logged: false
        }
  
      default: return state || initialState
    }
  }
  export default reducer;