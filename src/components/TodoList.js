import React, { Component } from 'react';
import { TodoItems } from './TodoItems';
import './TodoList.css'

export class TodoList extends Component {
  // The schema for a todo item expects a key and a text field
  // You can see it being used in TodoItems.js
  // eg: { key: 'someUniqueKey', text: 'The Text of the Item' }

  // You can use whatever you'd like for state management
  // below is an example of using useState
  // https://reactjs.org/docs/hooks-state.html

  // const [text, setText] = useState('')
  // const [items, setItems] = useState([])
  constructor(){
    super();
    this.state={
      items: [],
      text: {},
      value: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
  }

 handleInput (e){
    this.setState({
      value: e.target.value,
      text: {'text':e.target.value, 'key':e.target.value}
    })
  }

 handleSubmit = e => {
   e.preventDefault();
   if(this.state.text.text){
    this.setState({
      items: [...this.state.items, this.state.text],
      value: ''
    })
  }  
  }

 deleteItem = key => {
  this.setState({
    items: this.state.items.filter(item => item.key !== key)
  })
  }

  render() {
    return (
    <div className="todos">
      <div className="header">
        <form onSubmit={this.handleSubmit}>
          <input
            placeholder="enter task"
            onChange={this.handleInput}
            value={this.state.value}
            className="new-task"
            data-testid="new-task"
            autoFocus
          />
          <button type="submit">add</button>
        </form>
      </div>
      <TodoItems items={this.state.items} onDelete={this.deleteItem} />
    </div>
    )
  }
}
