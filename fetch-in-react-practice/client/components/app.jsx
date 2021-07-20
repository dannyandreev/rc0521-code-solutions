import React from 'react';
import PageTitle from './page-title';
import TodoList from './todo-list';
import TodoForm from './todo-form';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: []
    };
    this.addTodo = this.addTodo.bind(this);
    this.toggleCompleted = this.toggleCompleted.bind(this);
  }

  componentDidMount() {
    fetch('/api/todos')
      .then(response => response.json())
      .then(data => this.setState({ todos: data }));
  }

  addTodo(newTodo) {

    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ task: newTodo.task })
    };

    fetch('/api/todos', requestOptions)
      .then(response => response.json())
      .then(data => this.setState({ todos: this.state.todos.concat(data) })
      );
  }

  toggleCompleted(todoId) {

    const isCompletedToggleState = !this.state.todos[this.state.todos.findIndex(element => element.todoId === todoId)].isCompleted;

    const requestOptions = {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ isCompleted: isCompletedToggleState })
    };

    fetch(`/api/todos/${todoId}`, requestOptions)
      .then(response => response.json())
      .then(data => {
        const tempTodos = this.state.todos.slice();
        tempTodos[tempTodos.findIndex(element => element.todoId === todoId)].isCompleted = isCompletedToggleState;
        this.setState({ todos: tempTodos });
      }
      );
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col pt-5">
            <PageTitle text="Todo App"/>
            <TodoForm onSubmit={this.addTodo}/>
            <TodoList todos={this.state.todos} toggleCompleted={this.toggleCompleted}/>
          </div>
        </div>
      </div>
    );
  }
}
