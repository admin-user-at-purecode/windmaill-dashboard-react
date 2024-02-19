import React from 'react';
import { Windmill } from '@windmill/react-ui';
import Layout from './components/common/layout';
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <Windmill usePreferences>
     <Layout>
      <Dashboard />
    </Layout>
    </Windmill>
  );
}

export default App;
