// ========== Root Reducer
// import all modules
import { combineReducers } from 'redux'
import hardSet from 'redux-persist/es/stateReconciler/hardSet'
import storage from 'redux-persist/lib/storage'
import persistReducer from 'redux-persist/es/persistReducer'

// import all reducers
import authReducer from './auth'
import loadingReducer from './loading'

const rootPersistConfig = {
  key: 'root',
  storage,
  blacklist: ['loading']
}

const authPersistConfig = {
  key: 'auth',
  storage,
  stateReconciler: hardSet
}

const rootReducer = combineReducers({
  auth: persistReducer(authPersistConfig, authReducer),
  loading: loadingReducer
})

export default persistReducer(rootPersistConfig, rootReducer)
