import React from 'react';
import { Windmill } from '@windmill/react-ui';
import Layout from './components/common/layout';
import Tables from './pages/tables/Tables';

function App() {
  return (
    <Windmill usePreferences>
     <Layout>
      <Tables />
    </Layout>
    </Windmill>
  );
}

export default App;
