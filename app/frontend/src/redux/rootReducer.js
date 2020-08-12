import { combineReducers } from 'redux';
import appReducer from './appReducer';
import authReducer from './authReducer';
import { firestoreReducer } from 'redux-firestore'
import { firebaseReducer } from 'react-redux-firebase'


// export default combineReducers({    //combine reducers to one
//   appReducer, authReducer, firebaseReducer
// })

const rootReducer = combineReducers({
  auth: authReducer,
  app: appReducer,
  firestore: firestoreReducer,
  firebase: firebaseReducer
  

});

export default rootReducer