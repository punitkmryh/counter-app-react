class IndecisionApp extends React.Component {
  render() {
    const title = "Indecision Application";
    const subtitle = "❁ Get a way Life ❁";
    const options = ["item 1", "item 2", "item 3"];
    return (
      <div>
        <Header title={title} subtitle={subtitle} />
        <Action />
        <Options options={options} />
        <AddOption />
      </div>
    );
  }
}

class Header extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <h2>{this.props.subtitle}</h2>
      </div>
    );
  }
}

class Action extends React.Component {
  handleAction() {
    alert("handlePick");
  }
  render() {
    return (
      <div>
        <button onClick={this.handleAction}>What Should I Do?</button>
      </div>
    );
  }
}

class Options extends React.Component {
  constructor(props) {
    super(props);
    this.handleRemoveAll = this.handleRemoveAll.bind(this);
  }
  handleRemoveAll() {
    console.log(this.props.options);
  }
  render() {
    return (
      <div>
        <button onClick={this.handleRemoveAll}>RemoveAll</button>
        <p>
          {this.props.options.length > 0
            ? "Here are some options"
            : "No options"}
        </p>

        <ol>
          {this.props.options.map((option) => (
            <Option key={option} optionText={option} />
          ))}
        </ol>
      </div>
    );
  }
}

class Option extends React.Component {
  render() {
    return (
      <div>
        <li>{this.props.optionText}</li>
      </div>
    );
  }
}

class AddOption extends React.Component {
  handleAddOption(e) {
    e.preventDefault();
    const value = e.target.elements.option.value.trim();

    if (value) {
      alert(value)
    }
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleAddOption}>
          <input type="text" name="option" />
          <button>Add Options</button>
        </form>
      </div>
    );
  }
}

ReactDOM.render(<IndecisionApp />, document.getElementById("app"));
