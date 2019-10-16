import React, { PureComponent } from "react";
import "./App.css";
import Header from "../src/components/Header/Header";
import Main from "../src/components/Main/Main";

class App extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      userData: []
    };
    this.updateData = this.updateData.bind(this);
  }
  updateData(data) {
    this.setState({ userData: data });
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Main userData={this.state.userData} updateData={this.updateData} />
      </div>
    );
  }
}

export default App;
