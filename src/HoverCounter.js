import React from "react";

class HoverCounter extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0
    };
  }
  increment = () => {
    this.setState((prevState) => ({ count: prevState.count + 1 }));
  };

  render() {
    return (
      <div>
        <button onMouseEnter={this.increment} type="button">
          Hovered {this.state.count} times
        </button>
      </div>
    );
  }
}

export default HoverCounter;
