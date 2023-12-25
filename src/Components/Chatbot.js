import React, { useState } from 'react';
const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSendMessage = () => {
    if (inputValue.trim() === '') return;

    // Add user message to the chat
    setMessages([...messages, { text: inputValue, user: 'user' }]);
    setInputValue('');

    // Simulate chatbot response (you can replace this with actual chatbot logic)
    setTimeout(() => {
      setMessages([...messages, { text: 'I am a simple chatbot.', user: 'chatbot' }]);
    }, 500);
  };

  return (
    <div>
      <div style={{ height: '200px', border: '1px solid #ccc', overflowY: 'scroll' }}>
        {messages.map((message, index) => (
          <div key={index} style={{ margin: '8px', textAlign: message.user === 'user' ? 'right' : 'left' }}>
            <strong>{message.user === 'user' ? 'You: ' : 'Chatbot: '}</strong>
            {message.text}
          </div>
        ))}
      </div>
      <div style={{ marginTop: '10px' }}>
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Type your message..."
        />
        <button onClick={handleSendMessage}>Send</button>
      </div>
    </div>
  );
};

export default Chatbot;
