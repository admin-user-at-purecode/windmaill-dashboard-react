import React from "react";
import { Windmill } from "@windmill/react-ui";
import Layout from "./components/common/layout";

function App() {
  return (
    <Windmill usePreferences>
      <Layout></Layout>
    </Windmill>
  );
}

export default App;
