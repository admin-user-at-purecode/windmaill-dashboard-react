import React from 'react';
import { Windmill } from '@windmill/react-ui';
import ForgotPassword from './pages/forget-pass/ForgotPassword';


function App() {
  return (
    <Windmill usePreferences>
      <ForgotPassword />
    </Windmill>
  );
}

export default App;
