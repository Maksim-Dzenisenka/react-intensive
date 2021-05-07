import './App.css';
import React from 'react';

function ChildComponentPure(props) {
  return <h1>Hello, my {props.person}</h1>
}

const additive = 's';

function ChildComponentNoPure(props) {
  return <h2>Bye, my {props.person + additive}</h2>
}

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: '', disabled: '' };

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);

    console.log('constructor');
  }

  componentDidMount() {
    console.log('componentDidMount');
  }

  componentDidUpdate() {
    console.log('componentDidUpdate');
  }

  componentWillUnmount() {
    console.log('componentWillUnmount');
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
    if (event.target.value === 'реакт') {
      this.setState({ disabled: 'disabled' });
    } else {
      this.setState({ disabled: '' });
    }
  }

  handleClick(event) {
    event.preventDefault();
    document.getElementById('input').focus();
  }

  render() {
    console.log('render');
    return (
      <form style={{ margin: 30 }}>
        <ChildComponentPure person={'friend'} />
        <input type="text" id='input' value={this.state.value} autoFocus={this.state.autoFocus} onChange={this.handleChange} />
        <button style={{ marginLeft: 10 }} disabled={this.state.disabled}>Submit</button>
        <button style={{ marginLeft: 10 }} onClick={this.handleClick}>Focus</button>
        <ChildComponentNoPure person={'friend'} />
      </form>
    );
  }
}

export default Form;
