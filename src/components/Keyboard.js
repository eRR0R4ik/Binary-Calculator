import React, { Component } from 'react'
import { connect } from 'react-redux'


class Keyboard extends Component {
	constructor(props) {
		super(props)
	}
	countBinary() {
		
	}
	render() {
		const { value, addElem, clear, equal, memorySave, memoryGet, memoryClear } = this.props;
		return (
			<div>
				<div id="display">
					<div id="inner-display">
						<input className="display-input" type="text" value={ value } disabled readOnly />
					</div>
				</div>
				<div className="keyboard">
					<div id="row-one-keys">
						<ul id="row1">
							<li id="clear"><button type="button" className="clear" onClick={ clear.bind(this) } ></button></li>
						</ul>
					</div>
					<div id="row-two-keys">
						<ul id="row2">
							<li id="memrecall"><button type="button" className="memrecall" onClick={ memoryGet.bind(this) } /></li>
							<li id="memclear"><button type="button" className="memclear" onClick={ memoryClear.bind(this) }/></li>
							<li id="one"><button type="button" className="one" onClick={ addElem.bind(this, '1') } /></li>						
						</ul>
					</div>
					<div id="row-three-keys">
						<ul id="row2">
							<li id="memplus"><button type="button" className="memplus" onClick={ memorySave.bind(this, value) } /></li>
							<li id="zero"><button type="button" className="zero" onClick={ addElem.bind(this, '0') } /></li>					
						</ul>
					</div>
					<div id="row-five-keys">
						<ul id="row5">
							<li id="equals"><button type="button" className="equals" onClick={ equal.bind(this, value) } /></li>
							<li id="plus"><button type="button" className="plus" onClick={ addElem.bind(this, '+') } /></li>
							<li id="minus"><button type="button" className="minus" onClick={ addElem.bind(this, '-') }/></li>
						</ul>
					</div>
				</div>
			</div>
		)
	}
}

const mapStateToProps = (state) => {
	console.error('STATE', state);
	return{
		value: state.valueReducer.value
	}
}

const mapDispatchToProps = (dispatch) => {
	return{
		addElem: (text) => {
			dispatch({
				type: 'ADD_ELEM',
				text
			})
		},
		clear: () => {
			dispatch({
				type: 'CLEAR'
			})
		},
		equal: (value) => {
			dispatch({
				type: 'EQUAL',
				value
			})
		},
		memorySave: (value) => {
			dispatch({
				type: 'SAVE_IN_MEMORY',
				value
			})
		},
		memoryGet: () => {
			dispatch({
				type: 'GET_FROM_MEMORY'
			})
		},
		memoryClear: () => {
			dispatch({
				type: 'CLEAR_MEMORY'
			})
		}
	}
}


export default connect(mapStateToProps, mapDispatchToProps)(Keyboard)