// ========== Loading Actions

export const setLoading = (loading) => {
  return {
    type: 'SET_LOADING',
    payload: {
      data: {
        loading
      }
    }
  }
}
