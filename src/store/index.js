import { createStore } from 'redux'
import calculatorState from 'reducers/index'

const calculatorStore = createStore(
	calculatorState,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default calculatorStore