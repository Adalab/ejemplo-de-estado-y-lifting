import React from 'react';
import './App.css';
import Field from './components/Field';
import Par from './components/Par';
import { throwStatement } from '@babel/types';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      texto: 'Algo'
    }
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    const userText = event.currentTarget.value;
    this.setState({
      texto: userText
    });
  }

  render() {
    
    return (
      <div className="App">

        <Field action={this.handleInputChange} />

        <br />
        <Par texto1={this.state.texto} />

      </div>
    );
  }
}

export default App;
