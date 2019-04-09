import React from 'react'
import ReactDOM from 'react-dom'
import './stylesheets/normalize.scss'
import './stylesheets/utilities.scss'
import './index.scss'
import './stylesheets/page.scss'
import './stylesheets/btn.scss'
import App from './App'
import * as serviceWorker from './serviceWorker'

ReactDOM.render(<App />, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
