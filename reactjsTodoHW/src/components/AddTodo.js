import React, { Component } from 'react';
import PropTypes from 'prop-types';


//input and submit part for user
export class AddTodo extends Component {
    //default state with empty title
    state = {
        title: ''
    }

    //onSubmit method 
    onSubmit = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state.title);
        this.setState({ title: '' });
    }
    
    //onChange method to take the user input as title
    onChange = (e) => this.setState({ title: e.target.value });
    
    render() {
        return (
            <form onSubmit={this.onSubmit} style={{ display: 'flex' }}>
                <input 
                type="text" 
                name="title" 
                placeholder="Add Todo ..."
                style={{ flex: '10', padding: '5px' }}
                value={this.state.title}
                onChange={this.onChange}
                />
                
                <input type="submit" 
                value="Submit" 
                className="btn" 
                style={{ flex: '1'}}
                />
            </form>
           
        )
    }
}

//PropTypes
AddTodo.propTypes = {
    addTodo: PropTypes.func.isRequired
}

export default AddTodo
