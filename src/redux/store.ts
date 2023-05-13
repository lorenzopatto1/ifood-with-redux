import { Store, createStore } from 'redux'
import { CartState } from './Cart/reducer'

import { rootReducer } from './rootReducer'

export interface ApplicationState {
  cartReducer: CartState;
}

const store: Store<ApplicationState> = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__())

export default store