import React, { Component } from "react";

 
class Main extends Component {
constructor(props){
  super(props);

  this.state = {
    count: 0
  }
}

    increment = () => {
    this.setState({ count: this.state.count + 1});
     }

     decrement = () => {
      this.setState({ count: this.state.count - 1});
       }

  render() {
    return (
        <div className="Main">
          <button onClick={this.increment} className="counter">increment</button>
          <button onClick={this.decrement} className="counter">decrement</button>
          <h2>{this.state.count}</h2>

          <h1>Simple HomePage</h1>
          <ul>
          <div className="content">
          <button >Login</button>
          <div>
          <button>SignUp</button>
          </div>
          </div>
          </ul>
        

          
          </div>

    );
  }
}
 

 
export default Main;

