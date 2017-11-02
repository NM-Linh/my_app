import React from 'react'
import ReactDOM from  'react-dom'
import {Router, Route, browserHistory, IndexRoute} from 'react-router'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import './index.css'
import Game from './Game'
import Hello from './Hello'
import todoApp from './reducers'
import App from './components/App'

let store = createStore(todoApp)

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);