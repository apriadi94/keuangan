import React from 'react';
import AppStack from './src/stack/AppStack';
import { AppProvider } from './src/provider/AppProvider';

const App = () => {
  return (
    <AppProvider>
      <AppStack/>
    </AppProvider>
  );
};

export default App;
