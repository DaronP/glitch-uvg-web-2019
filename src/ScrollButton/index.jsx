import React, { Component } from 'react';
import './style.css';

export default class ScrollButton extends Component() {
  constructor() {
    super();
    this.state = {
      section: 1,
    };
    this.click = this.click.bind(this);
  }

  click() {
    if (this.state.section < 4) {
      window.scrollTo(0, this.state.section * 500);
    }
  }

  render() {
    return (
      <div className="button" onClick={this.click} onKeyUp={this.handleKeyUp} role="button" tabIndex={0}>
        <div className="arrow" />
      </div>
    );
  }
}
