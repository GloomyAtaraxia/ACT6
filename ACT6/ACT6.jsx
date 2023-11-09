import React from 'react';
import './GreetingCard.css'; // Create a separate CSS file for styling

class GreetingCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isSent: false,
    };
  }

  handleSendClick = () => {
    this.setState({ isSent: true });
    alert('Card Sent!');
  };

  render() {
    const { title, message, buttonText, imageSrc } = this.props;
    return (
      <div className="greeting-card">
        <div className="card-header">
          <h1>{title}</h1>
        </div>
        <div className="card-content">
          <img src={imageSrc} alt="Greeting Card" />
          <p>{message}</p>
        </div>
        <div className="card-footer">
          <button
            onClick={this.handleSendClick}
            disabled={this.state.isSent}
          >
            {this.state.isSent ? 'Card Sent!' : buttonText}
          </button>
        </div>
      </div>
    );
  }
}

export default GreetingCard;
