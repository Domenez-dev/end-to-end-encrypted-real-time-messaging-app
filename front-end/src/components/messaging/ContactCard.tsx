import React from 'react';
import { Contact } from '../../types';

interface ContactCardProps {
  contact: Contact;
  isSelected: boolean;
  onClick: () => void;
}

const ContactCard: React.FC<ContactCardProps> = ({ contact, isSelected, onClick }) => {
  return (
    <div
      onClick={onClick}
      className={`flex items-center p-4 cursor-pointer hover:bg-gray-50 ${
        isSelected ? 'bg-indigo-50' : ''
      }`}
    >
      <div className="relative">
        <img
          src={contact.avatar}
          alt={contact.name}
          className="w-12 h-12 rounded-full object-cover"
        />
        {contact.online && (
          <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
        )}
      </div>
      <div className="ml-4 flex-1">
        <h2 className="font-semibold text-gray-800">{contact.name}</h2>
        <p className="text-sm text-gray-500 truncate">{contact.lastMessage}</p>
      </div>
      <span className="text-xs text-gray-400">{contact.time}</span>
    </div>
  );
};

export default ContactCard;