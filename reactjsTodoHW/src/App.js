import React, { Component } from 'react';
import Todos from './components/Todos';
import Header from './components/layout/Header';
import AddTodo from './components/AddTodo';


import './App.css'

class App extends Component {
  
  //state part
  state = {
    todos: [
      {
        id: 1,
        title: 'React Redux çalış',
        completed: false
      },
      {
        id: 2,
        title: 'React JS ile Todo Projesi yap',
        completed: true
      },
      {
        id: 3,
        title: 'Çöpleri at',
        completed: false
      }
    ]
  }

  
   //markComplete method to change completed status after checked or unchecked (Toggle Complete)
   markComplete = (id) => {  
    this.setState( { todos: this.state.todos.map(todo => {
      if(todo.id === id){
        todo.completed = !todo.completed
      }
      return todo;
    })
  });
};
  
  //delete todo method, using filter to bring the elements whose id is not equal to item clicked to be deleted
  delTodo = (id) => {
    this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)]})
  }

  // Adding part of Todo 
  // id böyle verince ileride problem olacak...
  addTodo = (title) => {
    const newTodo = { 
      id: this.state.todos.length + 1,
      title,
      completed: false
    }

    this.setState({ todos: [...this.state.todos, newTodo]})
  
  }

  render() {
    
    return (
      <div className="App">  
        <div className="container">
          <Header />
          <Todos todos = {this.state.todos} markComplete={this.markComplete} 
          delTodo={this.delTodo} />
          <AddTodo addTodo={this.addTodo}/>
        </div>
      </div>
    );
  }
}
export default App;
