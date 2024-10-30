import React from 'react';
import { Search, Settings } from 'lucide-react';
import ContactCard from './ContactCard';
import { Contact } from '../../types';

interface ContactsListProps {
  contacts: Contact[];
  selectedContact: Contact;
  onSelectContact: (contact: Contact) => void;
}

const ContactsList: React.FC<ContactsListProps> = ({
  contacts,
  selectedContact,
  onSelectContact,
}) => {
  return (
    <div className="w-1/4 bg-white border-r border-gray-200">
      <div className="p-4 border-b border-gray-200">
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-2xl font-bold text-gray-800">Messages</h1>
          <Settings className="w-5 h-5 text-gray-500 cursor-pointer" />
        </div>
        <div className="relative">
          <input
            type="text"
            placeholder="Search conversations..."
            className="w-full px-4 py-2 bg-gray-100 rounded-lg pl-10 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <Search className="absolute left-3 top-2.5 w-5 h-5 text-gray-400" />
        </div>
      </div>
      <div className="overflow-y-auto h-[calc(100vh-9rem)]">
        {contacts.map((contact) => (
          <ContactCard
            key={contact.id}
            contact={contact}
            isSelected={selectedContact.id === contact.id}
            onClick={() => onSelectContact(contact)}
          />
        ))}
      </div>
    </div>
  );
};

export default ContactsList;