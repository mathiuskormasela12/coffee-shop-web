// ========== Auth Actions

export const setToken = (token) => {
  return {
    type: 'SET_TOKEN',
    payload: {
      data: {
        token
      }
    }
  }
}
