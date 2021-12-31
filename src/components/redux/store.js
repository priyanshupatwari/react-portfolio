import { createStore } from 'redux'
// custom defined funcs
import rootReducer from './reducers'

const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
/*for redux dev tool*/
export default store;