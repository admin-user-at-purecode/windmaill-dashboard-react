import React from 'react';
import { Windmill } from '@windmill/react-ui';
import Layout from './components/common/layout';
import Buttons from './pages/buttons/Buttons';

function App() {
  return (
    <Windmill usePreferences>
     <Layout>
      <Buttons />
    </Layout>
    </Windmill>
  );
}

export default App;
