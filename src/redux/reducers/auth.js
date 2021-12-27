// ========== Auth Reducer
const initialState = {
  token: null
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_TOKEN' : {
      return {
        ...state,
        token: action.payload.data.token
      }
    }

    default : {
      return {
        ...state
      }
    }
  }
}

export default reducer
