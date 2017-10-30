import React from 'react'
import ReactDOM from  'react-dom'
import {Router, Route, browserHistory, IndexRoute} from 'react-router'
import './index.css'
import Game from './Game'
import Hello from './Hello'

ReactDOM.render(
  <Router history={browserHistory}>
          {/*<IndexRoute component={Game} />*/}
      <Route path="/" component={Hello}/>
      <Route path="/game" component={Game}/>
  </Router>,
  document.getElementById('root')
);