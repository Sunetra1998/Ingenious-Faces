import React, { Component } from "react";

class NewNav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showPara: false,
      showInformation: false,
      showTask: false,
      showResource: false,
      showSolution: false,
    };
    this.btnClick = this.btnClick.bind(this);
    this.Information = this.Information.bind(this);
    this.Task = this.Task.bind(this);
    this.Resources = this.Resources.bind(this);
    this.Solution = this.Solution.bind(this);
  }

  btnClick() {
    this.setState({
      showPara: true,
      showInformation: false,
      showTask: false,
      showResource: false,
      showSolution: false,
    });
  }
  Information() {
    this.setState({
      showInformation: true,
      showPara: false,
      showTask: false,
      showResource: false,
      showSolution: false,
    });
  }
  Task() {
    this.setState({
      showTask: true,
      showResource: false,
      showSolution: false,
      showInformation: false,
      showPara: false,
    });
  }
  Resources() {
    this.setState({
      showResource: true,
      showTask: false,
      showSolution: false,
      showInformation: false,
      showPara: false,
    });
  }
  Solution() {
    this.setState({
      showSolution: true,
      showResource: false,
      showTask: false,
      showSolution: false,
      showInformation: false,
    });
  }

  render() {
    return (
      <div id="main">
        <button id="click" onClick={this.btnClick}>
          Mentor Video
        </button>
        <button id="click" onClick={this.Information}>
          Information
        </button>
        <button id="click" onClick={this.Task}>
          task
        </button>
        <button id="click" onClick={this.Resources}>
          Resources
        </button>
        <button id="click" onClick={this.Solution}>
          Solution
        </button>
        {this.state.showPara && <p id="para">hello Mentor </p>}
        {this.state.showInformation && <p id="para">hello Information </p>}
        {this.state.showTask && <p id="para">hello Task </p>}
        {this.state.showResource && <p id="para">hello Resources</p>}
        {this.state.showSolution && <p id="para">hello Solution</p>}
      </div>
    );
  }
}

export default NewNav;
