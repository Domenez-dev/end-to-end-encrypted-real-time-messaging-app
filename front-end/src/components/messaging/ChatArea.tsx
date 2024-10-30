import React from 'react';
import ChatHeader from './ChatHeader';
import MessageList from './MessageList';
import MessageInput from './MessageInput';
import { Contact, Message } from '../../types';

interface ChatAreaProps {
  contact: Contact;
  messages: Message[];
  newMessage: string;
  onNewMessageChange: (message: string) => void;
  onSendMessage: (message: string) => void;
}

const ChatArea: React.FC<ChatAreaProps> = ({
  contact,
  messages,
  newMessage,
  onNewMessageChange,
  onSendMessage,
}) => {
  return (
    <div className="flex-1 flex flex-col">
      <ChatHeader contact={contact} />
      <MessageList messages={messages} />
      <MessageInput
        value={newMessage}
        onChange={onNewMessageChange}
        onSend={onSendMessage}
      />
    </div>
  );
};

export default ChatArea;