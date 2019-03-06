import React from 'react';
import { InputText } from '@edx/paragon';

class Kitty extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
    };
  }

  render() {
    return (
      <div className="container mt-5">
        <h1 className="mb-2">Hello, Kitty!</h1>
        <div className="card p-5 h-50">
          <label htmlFor="name-box">Please enter your name:</label>
          <InputText className="mb-2" id="name-box" type="text" onChange={n => this.setState({ name: n })} />
          <div className="d-flex justify-content-end">
            <button type="button" className="btn btn-primary" onClick={() => this.props.updateName(this.state.name)}>Click me!</button>
          </div>
          {this.props.displayName && <span>Hello {this.props.displayName}</span>}
          {this.props.displayName == 'Rickie' && <span className="h1" id="e">🤴🏻</span>}
          {this.props.displayName == 'Adam S.' && <span className="h1" id="e">💩</span>}
          {this.props.displayName == 'Ned' && <span className="h1" id="e">🦃</span>}
          {this.props.displayName && !['Rickie', 'Ned', 'Adam S.'].includes(this.props.displayName) && <span className="h1" id="e">🙀</span>}

        </div>
      </div>
    );
  }
}

export default Kitty;
