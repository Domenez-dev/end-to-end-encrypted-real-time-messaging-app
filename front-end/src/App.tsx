import React, { useState } from 'react';
import { MessageSquare } from 'lucide-react';
import LandingPage from './components/LandingPage';
import MessagingInterface from './components/MessagingInterface';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = () => setIsAuthenticated(true);
  const handleSignup = () => setIsAuthenticated(true);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 to-purple-100">
      {!isAuthenticated ? (
        <LandingPage onLogin={handleLogin} onSignup={handleSignup} />
      ) : (
        <MessagingInterface />
      )}
    </div>
  );
}

export default App;