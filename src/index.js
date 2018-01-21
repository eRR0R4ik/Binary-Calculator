import React from 'react'
import { render } from 'react-dom'
import Calculator from 'containers/Calculator'
import 'assets/styles/style.scss'
import { AppContainer } from 'react-hot-loader'


const renderApp = Component => {
	render(
		<AppContainer>
			<Component />
		</AppContainer>,
		document.querySelector('#mount_place')
	)
}


renderApp(Calculator)


if(module.hot) {
	module.hot.accept('containers/Calculator', () => { renderApp(Calculator) })
}
