import React from 'react'
import ReactDOM from 'react-dom'
import './style.css'
import { TodoList } from './components'

ReactDOM.render(
  <div>
    <TodoList />
  </div>,
  document.querySelector('#container')
)
