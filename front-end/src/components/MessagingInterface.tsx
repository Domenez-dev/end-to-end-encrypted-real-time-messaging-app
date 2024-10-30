import React, { useState } from 'react';
import ContactsList from './messaging/ContactsList';
import ChatArea from './messaging/ChatArea';
import { Contact, Message } from '../types';
import { mockContacts, mockMessages } from '../data/mockData';

const MessagingInterface = () => {
  const [selectedContact, setSelectedContact] = useState<Contact>(mockContacts[0]);
  const [messages, setMessages] = useState<Message[]>(mockMessages);
  const [newMessage, setNewMessage] = useState('');

  const handleSendMessage = (content: string) => {
    if (!content.trim()) return;
    
    const newMsg: Message = {
      id: messages.length + 1,
      content,
      sent: true,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };
    
    setMessages([...messages, newMsg]);
    setNewMessage('');
  };

  return (
    <div className="flex h-screen bg-gray-100">
      <ContactsList
        contacts={mockContacts}
        selectedContact={selectedContact}
        onSelectContact={setSelectedContact}
      />
      <ChatArea
        contact={selectedContact}
        messages={messages}
        newMessage={newMessage}
        onNewMessageChange={setNewMessage}
        onSendMessage={handleSendMessage}
      />
    </div>
  );
};

export default MessagingInterface;