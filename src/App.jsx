import React, { useState } from 'react';
import Login from './components/Login';
import Home from './pages/Home';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <div>
      {loggedIn ? <Home /> : <Login onLogin={() => setLoggedIn(true)} />}
    </div>
  );
}

export default App;
