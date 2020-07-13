class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.handleAddOne = this.handleAddOne.bind(this);
    this.handleMinusOne = this.handleMinusOne.bind(this);
    this.handleReset = this.handleReset.bind(this);
    // ^ default State object
    this.state = { count: 0 };
  }
  handleAddOne() {
    // prevState -> this.state ={} value
    this.setState((prevState) => {
      return {
        count: prevState.count + 1,
      };
    });
    console.log("+1");
  }

  handleMinusOne() {
    this.setState((prevState) => {
      return prevState.count == 0
        ? {
            count: prevState.count - 0,
          }
        : { count: prevState.count - 1 };
    });
    console.log("-1");
  }

  handleReset() {
    this.setState(() => {
      return {count: 0 }
    });
    console.log("reset");
  }

  render() {
    return (
      <div>
        <h2>Count: {this.state.count}</h2>
        <button onClick={this.handleAddOne}>+1</button>
        <button disabled={this.state.count == 0}onClick={this.handleMinusOne}>-1</button>
        <button onClick={this.handleReset}>RESET</button>
      </div>
    );
  }
}

ReactDOM.render(<Counter />, document.getElementById("app-id"));
