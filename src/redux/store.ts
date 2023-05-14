import { Store, createStore } from 'redux'
import { CartState } from './Cart/reducer'

import { rootReducer } from './rootReducer'

export interface ApplicationState {
  cartReducer: CartState;
}

const store: Store<ApplicationState> = createStore(rootReducer)

export default store