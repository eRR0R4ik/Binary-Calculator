const initState = {
	value: 'WELCOME',
	memory: ''
}

const valueReducer = (state = initState, action) => {
	switch(action.type){
	case 'ADD_ELEM':
		console.error('ADD_ELEM', state, action);
		return{
			...state,
			value: state.value == 'WELCOME' || 
			state.value == 'STORED' || state.value == 'REMOVED' 
			|| state.value == 'EMPTY'? action.text : state.value + action.text
		}
	case 'CLEAR':
		console.error('CLEAR', state, action);
		return{
			...state,
			value: ''
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
			value: 'STORED',
			memory: state.value == 'WELCOME' || 
			state.value == 'STORED' || state.value == 'REMOVED'
			|| state.value == 'EMPTY' ? '' : action.value
		}
	case 'GET_FROM_MEMORY':
		console.error('GET', state, action);
		return{
			...state,
			value: state.memory ? state.memory : 'EMPTY'
		}
	case 'CLEAR_MEMORY':
		console.error('CLEAR_MEMORY', state, action);
		return{
			...state,
			value: 'REMOVED',
			memory: ''
		}
	default:
		return state;
	}
}

export default valueReducer