import React, { PureComponent } from "react";
import "./Main.css";
import UserMessage from "../UserMessage/UserMessage";

class Main extends PureComponent {
  UNSAFE_componentWillMount() {
    if (this.props.userData.length !== 0) {
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
            SELF.props.updateData(data);
            console.log("Успешно");
          });
        }
      });
    }
  }

  render() {
    return (
      <main className="main">
        {this.props.userData.map(el => (
          <UserMessage
            className="main__user-message"
            key={el.id}
            title={el.title}
            body={el.body}
          />
        ))}
      </main>
    );
  }
}
export default Main;
