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
  componentDidMount() {
    if (this.state.userData.length !== 0) {
      return null;
    } else {
      const SELF = this;
      let myHeaders = new Headers();
      fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "GET",
        headers: myHeaders,
        mode: "cors",
        cache: "default"
      }).then(function(response) {
        if (!response.ok) {
          console.log("Не успешно");
        } else {
          response.json().then(function(data) {
            SELF.updateData(data);
          });
        }
      });
    }
  }

  updateData = data => {
    this.setState({ userData: data });
  };

  search = searchValue => {
    let dataArray = this.state.userData;
    let tempArray = this.state.userData;
    if (searchValue === "") {
      this.setState({ isFiltered: false });
    } else {
      this.setState({ isFiltered: true });
      for (let i = 0; i < dataArray.length; i++) {
        if (
          dataArray[i]["title"].includes(searchValue) !== true &&
          dataArray[i]["body"].includes(searchValue) !== true
        ) {
          tempArray = tempArray.filter(el => el.id !== i + 1);
        }
      }
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
