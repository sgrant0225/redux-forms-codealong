import React, { Component } from 'react';
import { connect } from 'react-redux';

class CreateTodo extends Component {
  constructor(){  //constuctor method binds this
    super();
    this.state = {
      text: '',
    };
  }

  //class method
  // handleChange(event) {
  //   this.setState({
  //     text: event.target.value
  //   })
  // }
  
  //class property version and using an arrow function. This means it will bound to the 
  //particular instance of the componnt it is defined in. 
  handleChange = (event) => {
    this.setState({
      text: event.target.value,
    });
  };
  
  handleSubmit = event => {
    event.preventDefault();
    this.props.addTodo(this.state)  //addTodo function then creates the action and dispatches it to our reducer 
  }
  //Alternate way of passing dispatch directly to our handle submit function.
  // handleSubmit = (event) => {
  //   event.preventDefault();
  //   this.props.dispatch({ type: "ADD_TODO", payload: this.state })
  // };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <p>
            <input
              type="text"
              placeholder="add todo"
              onChange={this.handleChange}
              value={this.state.text}
            />
          </p>
          <input type="submit" />
        </form>
        {this.state.text}
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addTodo: (formData) => dispatch({ type: "ADD_TODO", payload: formData }),
  };
};





export default connect(null, mapDispatchToProps)(CreateTodo);
//null is set as the first argument because we are not concerned with writing mapStateToProps() function. 

//Alternate way
// export default connect()(CreateTodo);
