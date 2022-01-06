// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';

// ReactDOM.render(
//   <React.StrictMode>
//     <App>
//       <div>hello</div>
//     </App>
//   </React.StrictMode>,
//   document.getElementById('root'),
// );

import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Counter extends Component {
  static defaultProps = {
    step: 1,
  };
  constructor() {
    super();
    this.handleIncrement = this.handleIncrement.bind(this);
    this.handleDecrement = this.handleDecrement.bind(this);
  }
  handleIncrement = evt => {
    console.log('Increment button was clicked!', evt); // работает
    console.log('this.props: ', this.props); // работает
  };

  handleDecrement = evt => {
    console.log('Decrement button was clicked!', evt); // работает
    console.log('this.props: ', this.props); // работает
  };

  render() {
    const { step } = this.props;

    return (
      <div>
        <span>0</span>
        <button type="button" onClick={this.handleIncrement}>
          Increment by {step}
        </button>
        <button type="button" onClick={this.handleDecrement}>
          Decrement by {step}
        </button>
      </div>
    );
  }
}

ReactDOM.render(<Counter step={7} />, document.getElementById('root'));
