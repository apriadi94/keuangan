import React from 'react';
import AppStack from './src/stack/AppStack';
import { AppProvider } from './src/provider/AppProvider';
import 'moment/locale/id';
import {LogBox } from 'react-native';
LogBox.ignoreLogs(['Reanimated 2']);

const App = () => {
  return (
    <AppProvider>
      <AppStack/>
    </AppProvider>
  );
};

export default App;
