import React, { PureComponent } from "react";
import "./MessagesList.css";
import Message from "../Message/Message";

class MessagesList extends PureComponent {
  render() {
    return (
      <main className="messages-list">
        {this.props.userData.map(message => (
          <Message
            className="messages-list__item"
            key={message.id}
            message={message}
          />
        ))}
      </main>
    );
  }
}
export default MessagesList;
