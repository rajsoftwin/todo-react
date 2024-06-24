// index.js
import React from 'react'
import ReactDOM from 'react-dom'
import TodoApp from './TodoApp'

import { Provider } from 'react-redux'
import store from './redux/store'

// As of React 18
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <Provider store={store}>
    <TodoApp />
  </Provider>,
)