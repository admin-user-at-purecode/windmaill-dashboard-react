import React from 'react';
import { Windmill } from '@windmill/react-ui';
import CreateAccount from './pages/create_account/CreateAccount';


function App() {
  return (
    <Windmill usePreferences>
    <CreateAccount />
    </Windmill>
  );
}

export default App;
