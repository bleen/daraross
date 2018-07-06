import React from 'react';
import '../styles/App.css';

class Counter extends React.Component {
  state = {};

  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
      stepBy: 1,
      incrementKey: props.incrementKey
    };

    window.addEventListener('keydown', this.handleKeyDown.bind(this));
  }

  incrementCounter = incrementBy => {
    this.setState(prevstate => ({
      counter: prevstate.counter + incrementBy
    }));
  };

  decrementCounter = decrementBy => {
    this.setState(prevstate => ({
      counter: prevstate.counter - decrementBy
    }));
  };

  handleKeyDown(event) {
    if (this.state.incrementKey === event.key) {
      this.incrementCounter(this.state.stepBy);
    }
  }

  render() {
    return (
      <div className={"counter"}>
        <Result counter={this.state.counter} />
        <div className={"instructions"}>
          Press the ' {this.state.incrementKey} ' key to increment by {this.state.stepBy} or click the buttons below.
        </div>
        <div className={"buttons"}>
          <Button stepBy={this.state.stepBy} mode={'increment'} onClickFunction={this.incrementCounter} />
          <Button stepBy={this.state.stepBy} mode={'decrement'} onClickFunction={this.decrementCounter} />
        </div>
      </div>
    );
  }
}

class Button extends React.Component {
  handleClick = () => {
    this.props.onClickFunction(this.props.stepBy);
  };

  render() {
    return (
      <button onClick={this.handleClick}>
        {this.props.mode === 'increment' ? '+' : '-'}{this.props.stepBy}
      </button>
    );
  }
}

const Result = props => {
  return (
    <span className="count">
      {props.counter}
    </span>
  );
};

class App extends React.Component {

  render() {
    return (
      <div>
        <h1>Tri Counter</h1>
        <div className={"wrapper"}>
          <Counter incrementKey={'v'} />
          <Counter incrementKey={'b'} />
          <Counter incrementKey={'n'} />
        </div>
      </div>
    )
  }
}

export default App;
