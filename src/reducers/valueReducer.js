const initState = {
	value: 'WELCOME',
	memory: 0
}

const valueReducer = (state = initState, action) => {
	switch(action.type){
	case 'ADD_ELEM':
		console.error('ADD_ELEM', state, action);
		return{
			...state,
			value: state.value == 'WELCOME' ? action.text : state.value + action.text
		}
	case 'CLEAR':
		console.error('CLEAR', state, action);
		return{
			...state,
			value: 0
		}
	case 'EQUAL':
		console.error('EQUAL', state, action);
		return{
			...state,
			value: eval(action.value)
		}
	case 'SAVE_IN_MEMORY':
		console.error('SAVE', state, action);
		return{
			...state,
			memory: action.value
		}
	case 'GET_FROM_MEMORY':
		console.error('GET', state, action);
		return{
			...state,
			value: state.memory
		}
	case 'CLEAR_MEMORY':
		console.error('CLEAR_MEMORY', state, action);
		return{
			...state,
			value: 0,
			memory: 0
		}
	default:
		return state;
	}
}

export default valueReducer