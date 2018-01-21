import React, { Component } from 'react'
import { Provider } from 'react-redux'
// import Display from '../components/Dislay'
import Keyboard from '../components/Keyboard'
import store from 'store'
window.store = store


export default class Calculator extends Component {
	render() {
		return (
			<Provider store={ store }>
				<div className="main">
					<div id="calculator">
						<Keyboard />
					</div>
				</div>
			</Provider>
		)
	}
}