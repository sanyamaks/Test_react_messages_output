import React, { PureComponent } from "react";
import "./App.css";
import Header from "../src/components/Header/Header";
import MessagesList from "./components/MessagesList/MessagesList";

async function fetchMessages() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const json = await response.json().then(data => data);

  if (response.ok) {
    return json;
  } else {
    throw new Error("Произошла ошибка при загрузке списка сообщений");
  }
}

class App extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      messages: [],
      filteredMessages: []
    };
  }

  componentDidMount() {
    this.fetchMessages();
  }

  async fetchMessages() {
    try {
      const messages = await fetchMessages();
      this.setState({ messages, filteredMessages: messages });
    } catch (error) {
      alert(error.message);
    }
  }

  filterMessages = searchValue => {
    const { messages } = this.state;
    if (searchValue === "") {
      this.setState({ filteredMessages: messages });
    } else {
      this.setState({
        filteredMessages: messages.filter(
          message =>
            message.title.includes(searchValue) ||
            message.body.includes(searchValue)
        )
      });
    }
  };

  render() {
    const { filteredMessages } = this.state;
    return (
      <div className="App">
        <Header search={this.filterMessages} />
        <MessagesList userData={filteredMessages} />
      </div>
    );
  }
}

export default App;
