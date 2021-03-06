import React, { Component } from 'react'
import { connect } from 'react-redux'


class Keyboard extends Component {
	constructor(props) {
		super(props)
	}
	countBinary() {	
		let numbers, x, y, sum, sub, binary; 
		if (this.binaryValue.value.indexOf('+') != -1) {
			numbers = this.binaryValue.value.split('+');
			x = parseInt(numbers[0], 2);
			y = parseInt(numbers[1], 2);
			if(y) {
				sum = x + y;
				binary = sum.toString(2);
			} else {
				return;
			}
		} else if (this.binaryValue.value.indexOf('-') != -1) {
			numbers = this.binaryValue.value.split('-');
			x = parseInt(numbers[0], 2);
			y = parseInt(numbers[1], 2);
			if(y) {
				sum = x - y;
				binary = sum.toString(2);
			} else {
				return;
			}
		} else {
			return;
		}

		this.props.equal(binary);
	}
	render() {
		const { value, addElem, clear, memorySave, memoryGet, memoryClear } = this.props;
		return (
			<div>
				<div id="display">
					<div id="inner-display">
						<input className={`display-input ${value == 'WELCOME' || value == 'STORED' 
						|| value == 'REMOVED' || value == 'EMPTY' ? 'center' : ''}`} ref={(input) => { this.binaryValue = input }} 
						type="text" value={ value } disabled readOnly />
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
							<li id="equals"><button type="button" className="equals" onClick={ this.countBinary.bind(this) } /></li>
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