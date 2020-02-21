import React from 'react';
import './App.css';
import { connect } from "react-redux"
import { incrementByOne, decrementByOne } from "./actions/counter.action"

interface IProps {
  counter: number
  incrementByOne: () => void
  decrementByOne: () => void
}
class App extends React.Component<IProps> {
  render() {
    const { counter, incrementByOne, decrementByOne } = this.props
    return (
      <div className="App" >
        <h1>
          Hello Tonoy
      </h1>
        <div>
          {this.props.counter}
        </div>
        <div>
          <button onClick={() => incrementByOne()} >Increment</button>
          {" "}
          {counter > 0 && <button onClick={() => decrementByOne()} >Decrement</button>}
        </div>
      </div>
    );
  }
}
const mapStataToProps = (state: any) => ({
  counter: state.counter.counter
})
export default connect(mapStataToProps, { incrementByOne, decrementByOne })(App);
