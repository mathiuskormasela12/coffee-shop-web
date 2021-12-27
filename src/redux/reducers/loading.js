// ========== Loading Reducer
const initialState = {
  loading: false
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_LOADING' : {
      return {
        ...state,
        loading: action.payload.data.loading
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
