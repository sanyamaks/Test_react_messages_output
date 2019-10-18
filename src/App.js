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
      searchValue: "",
      isFiltered: false
    };
    this.updateData = this.updateData.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.filterArray = this.filterArray.bind(this);
    this.filterArrayByName = this.filterArrayByName.bind(this);
  }

  updateData(data) {
    this.setState({ userData: data });
  }

  handleChange(event) {
    this.setState({ searchValue: event.target.value });
  }

  handleClick(e) {
    e.preventDefault();
    this.filterArray(this.state.searchValue, this.state.userData);
  }

  filterArray(searchValue, dataArray) {
    let tempArray = dataArray;
    if (searchValue === "") {
      this.setState({ isFiltered: false });
    } else {
      this.setState({ isFiltered: true });
      for (let i = 0; i < dataArray.length; i++) {
        if (
          this.filterArrayByName(searchValue, dataArray, "body", i) !== true &&
          this.filterArrayByName(searchValue, dataArray, "title", i) !== true
        ) {
          tempArray = tempArray.filter(el => el.id !== i + 1);
        }
      }
      this.setState({ filteredUserData: tempArray });
      console.log(this.state.userData);
    }
  }

  filterArrayByName(searchValue, dataArray, name, i) {
    for (let j = 0; j <= dataArray[i][name].length; j++) {
      if (searchValue === dataArray[i][name].slice(j, j + searchValue.length)) {
        return true;
      }
    }
  }

  render() {
    return (
      <div className="App">
        <Header
          onChange={this.handleChange}
          onClick={this.handleClick}
          value={this.props.searchValue}
        />
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
