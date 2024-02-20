import React from 'react';
import { Windmill } from '@windmill/react-ui';
import Layout from './components/common/layout';
import Modals from './pages/modal/Modals';

function App() {
  return (
    <Windmill usePreferences>
     <Layout>
      <Modals />
    </Layout>
    </Windmill
    >
  );
}

export default App;
