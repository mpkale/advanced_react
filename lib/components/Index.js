import React from 'react';
import ReactDom from 'react-dom';
import { Promise } from 'core-js';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      answer: 42,
    };
    this.asyncFunc = () => {
      return Promise.resolve(37);
    };
  }

  async componentDidMount() {
    this.setState({
      answer: await this.asyncFunc()
    });
  }
   
  render() {
    return(
      <h2>Hello Class Componenets -- {this.state.answer}</h2>
    );
  }
}

export default App;

ReactDom.render(
  <App />,
  document.getElementById('root')
);