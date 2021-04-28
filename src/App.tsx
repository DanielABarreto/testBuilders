import 'react-native-gesture-handler';
import React from 'react';
import { Provider } from 'react-redux';

import store from './store';
import { ThemeProvider } from './hooks/theme';
import { StatusBar, useColorScheme } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Routes from './routes';


if (__DEV__) {
  import('./config/ReactotronConfig');
}

declare global {
  interface Console {
    tron: any;
  }
}
const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <Provider store={store}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ThemeProvider>
        <NavigationContainer independent={true}>
          <Routes />
        </NavigationContainer>
      </ThemeProvider>
    </Provider>
  );
};

export default App;
