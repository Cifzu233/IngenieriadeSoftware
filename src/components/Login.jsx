import React, { useState } from 'react';

const Login = ({ onLogin }) => {
  const [user, setUser] = useState('');
  const [pass, setPass] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (user === 'admin' && pass === '1234') {
      onLogin();
    } else {
      setError('Credenciales incorrectas');
    }
  };

  return (
    <div style={styles.container}>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Usuario"
          value={user}
          onChange={(e) => setUser(e.target.value)}
          style={styles.input}
        />
        <input
          type="password"
          placeholder="Contraseña"
          value={pass}
          onChange={(e) => setPass(e.target.value)}
          style={styles.input}
        />
        <button type="submit" style={styles.button}>Entrar</button>
      </form>
      {error && <p style={styles.error}>{error}</p>}
    </div>
  );
};

const styles = {
  container: { maxWidth: 300, margin: 'auto', padding: 20 },
  input: { display: 'block', width: '100%', margin: '10px 0', padding: 8 },
  button: { width: '100%', padding: 10, background: '#4CAF50', color: 'white', border: 'none' },
  error: { color: 'red', marginTop: 10 }
};

export default Login;
