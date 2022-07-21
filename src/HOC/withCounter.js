import React from "react";

const withCounter = (OriginalComponent) => {
  class NewComponent extends React.Component {
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
        <OriginalComponent
          count={this.state.count}
          increment={this.increment}
        />
      );
    }
  }
  return NewComponent;
};

export default withCounter;
