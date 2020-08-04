import React, { Component } from 'react'
import PropTypes from 'prop-types';


export class TodoItem extends Component {
    
    //style method
    getStyle = () => {
        return {
            textAlign: 'center',
            background: this.props.todo.completed ? '#FF3C33' : '#7AFF33',
            padding: '10px',
            borderBottom: '1px #ccc solid',
            textDecoration: this.props.todo.completed ? 'line-through' : 'none' 
        }
    }
    
    componentDidMount = (props) => {
        console.log(this.props.todo);
      };

    render() {
        const { id, title, completed } = this.props.todo; 
//Taking id and title from item with checkbox
        return (
            <div style ={this.getStyle()}>
            
                <p>
                    <input type="checkbox" 
                    defaultChecked={completed}
                    onChange={this.props.markComplete.bind(this, id)} 
                    /> {" "}
                    { title }
                    <button onClick={this.props.delTodo.bind(this, id)} style ={btnStyle}>x</button>
                    
                </p>
            </div>
        )
    }
}

//propTypes
TodoItem.propTypes = { 
    todo: PropTypes.object.isRequired,
    markComplete: PropTypes.func.isRequired,
    delTodo: PropTypes.func.isRequired,
  }


//button style
const btnStyle = { 
    background: '#ff0000',
    color: '#fff',
    border: '1px solid #000',
    padding: '5px 9px',
    borderRadius: '50%',
    cursor: 'pointer',
    float: 'right'

}

export default TodoItem
