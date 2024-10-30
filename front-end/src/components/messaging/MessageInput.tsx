import React from 'react';
import { Send } from 'lucide-react';

interface MessageInputProps {
  value: string;
  onChange: (value: string) => void;
  onSend: (message: string) => void;
}

const MessageInput: React.FC<MessageInputProps> = ({ value, onChange, onSend }) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSend(value);
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 bg-white border-t border-gray-200">
      <div className="flex items-center space-x-2">
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="Type a message..."
          className="flex-1 px-4 py-2 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
        <button
          type="submit"
          className="p-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
        >
          <Send className="w-5 h-5" />
        </button>
      </div>
    </form>
  );
};

export default MessageInput;