import React from 'react';
import { Message } from '../../types';

interface MessageListProps {
  messages: Message[];
}

const MessageList: React.FC<MessageListProps> = ({ messages }) => {
  return (
    <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
      {messages.map((message) => (
        <div
          key={message.id}
          className={`flex ${message.sent ? 'justify-end' : 'justify-start'}`}
        >
          <div
            className={`max-w-[70%] p-3 rounded-lg ${
              message.sent
                ? 'bg-indigo-600 text-white rounded-br-none'
                : 'bg-white text-gray-800 rounded-bl-none'
            }`}
          >
            <p>{message.content}</p>
            <p className={`text-xs mt-1 ${message.sent ? 'text-indigo-200' : 'text-gray-400'}`}>
              {message.time}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MessageList;