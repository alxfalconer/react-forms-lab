import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message: "",
    };
  }

  charCount = (event) => {
    this.setState({
      message: event.target.value,
    });
  };
  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" 
        onChange={this.charCount}/>
        <p>{remainingChars}</p>
      </div>
    );
  }
}

export default TwitterMessage;
