import React from 'react';
import '../src/App.css';
import TextField from '@mui/material/TextField';
import { Button, Checkbox } from '@mui/material';
function App() {
  return (
    <div className="App">
      <TextField
        label="Email Address"
        name="email"
        autoComplete="email"
        autoFocus
        fullWidth
        required
      />
      <TextField label="Password" type="password" />
      <Checkbox value="remember" color="primary" />
      <Button type="submit">Sign in</Button>
    </div>
  );
}

export default App;
