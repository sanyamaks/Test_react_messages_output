import React, { PureComponent } from "react";
import "./App.css";
import Header from "../src/components/Header/Header";
import Main from "../src/components/Main/Main";

class App extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      userData: [],
      filteredUserData: [],
      isFiltered: false
    };
  }

  updateData = data => {
    this.setState({ userData: data });
  };

  componentDidMount = () => {
    if (this.state.userData.length !== 0) {
      return null;
    } else {
      fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "GET"
      }).then(response => {
        if (!response.ok) {
          console.log("Не успешно");
        } else {
          response.json().then(data => {
            this.updateData(data);
          });
        }
      });
    }
  };

  search = searchValue => {
    let dataArray = this.state.userData;
    if (searchValue === "") {
      this.setState({ isFiltered: false });
    } else {
      this.setState({ isFiltered: true });
      let tempArray = dataArray.filter(
        el =>
          el["title"].includes(searchValue) === true ||
          el["body"].includes(searchValue) === true
      );
      this.setState({ filteredUserData: tempArray });
    }
  };

  render() {
    return (
      <div className="App">
        <Header search={this.search} />
        <Main
          userData={
            !this.state.isFiltered
              ? this.state.userData
              : this.state.filteredUserData
          }
          updateData={this.updateData}
        />
      </div>
    );
  }
}

export default App;
