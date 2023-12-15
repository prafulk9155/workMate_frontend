import React, { useState } from 'react';

const AlgierBoard = () => {
  const [messages, setMessages] = useState([]);

  const handleMessageSubmit = (message) => {
    setMessages([...messages, message]);
  };

  return (
    <div>
      <h1>Algier Board</h1>
      <MessageList messages={messages} />
      <MessageForm onMessageSubmit={handleMessageSubmit} />
    </div>
  );
};

const MessageList = ({ messages }) => {
  return (
    <ul>
      {messages.map((message, index) => (
        <li key={index}>{message}</li>
      ))}
    </ul>
  );
};

const MessageForm = ({ onMessageSubmit }) => {
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onMessageSubmit(message);
    setMessage('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button type="submit">Add Message</button>
    </form>
  );
};

export default AlgierBoard;
