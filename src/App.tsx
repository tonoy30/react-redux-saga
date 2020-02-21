import React from 'react';
import { connect } from "react-redux";
import './App.css';
import { increment, decrement } from './actions/counter.action';

interface IProps {
  counter: number
  increment: () => void
  decrement: () => void
}
class App extends React.Component<IProps> {
  render() {
    const { counter, increment, decrement } = this.props
    return (
      <div className="App" >
        <h1>
          Hello Tonoy
      </h1>
        <div>
          {this.props.counter}
        </div>
        <div>
          <button onClick={() => increment()} >Increment</button>
          {" "}
          {counter > 0 && <button onClick={() => decrement()} >Decrement</button>}
        </div>
      </div>
    );
  }
}
const mapStataToProps = (state: any) => ({
  counter: state.counter.counter
})

export default connect(mapStataToProps, {
  increment, decrement
})(App);
