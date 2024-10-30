export interface Contact {
  id: number;
  name: string;
  avatar: string;
  lastMessage: string;
  time: string;
  online: boolean;
}

export interface Message {
  id: number;
  content: string;
  sent: boolean;
  time: string;
}