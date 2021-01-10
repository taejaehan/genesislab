import React, { useState } from 'react';
import Main from "./Main";

function App() {
  const [value, onChange] = useState(new Date());

  return (
    <div className="app">
      <Main></Main>
    </div>
  );
}
export default App;
