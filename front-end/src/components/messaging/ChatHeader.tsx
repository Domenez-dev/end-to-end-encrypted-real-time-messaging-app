import React from 'react';
import { Phone, Video, MoreVertical } from 'lucide-react';
import { Contact } from '../../types';

interface ChatHeaderProps {
  contact: Contact;
}

const ChatHeader: React.FC<ChatHeaderProps> = ({ contact }) => {
  return (
    <div className="p-4 border-b border-gray-200 bg-white">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <img
            src={contact.avatar}
            alt={contact.name}
            className="w-10 h-10 rounded-full object-cover"
          />
          <div className="ml-4">
            <h2 className="font-semibold text-gray-800">{contact.name}</h2>
            <p className="text-sm text-gray-500">
              {contact.online ? 'Online' : 'Offline'}
            </p>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <Phone className="w-5 h-5 text-gray-500 cursor-pointer" />
          <Video className="w-5 h-5 text-gray-500 cursor-pointer" />
          <MoreVertical className="w-5 h-5 text-gray-500 cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default ChatHeader;