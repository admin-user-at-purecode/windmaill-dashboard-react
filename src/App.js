import React from 'react';
import { Windmill } from '@windmill/react-ui';
import Login from './pages/login/Login';

function App() {
  return (
    <Windmill usePreferences>
      <Login />
    </Windmill>
  );
}

export default App;
