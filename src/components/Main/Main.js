import React, { PureComponent } from "react";
import "./Main.css";
import UserMessage from "../UserMessage/UserMessage";

class Main extends PureComponent {
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
