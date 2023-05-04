import React from 'react';
import { StatusBar, StyleSheet, SafeAreaView } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { ThemeProvider } from 'styled-components/native';

import theme from './styles/theme';
import StackRoutes from './routes/Stack.routes';

const App = () => {
  return (
    <GestureHandlerRootView style={style.rootContainer}>
      <SafeAreaView style={style.rootContainer}>
        <StatusBar
          barStyle="dark-content"
          translucent
          backgroundColor="transparent"
        />
        <ThemeProvider theme={theme}>
          <NavigationContainer>
            <StackRoutes />
          </NavigationContainer>
        </ThemeProvider>
      </SafeAreaView>
    </GestureHandlerRootView>
  );
};

const style = StyleSheet.create({
  rootContainer: {
    flex: 1,
  },
});

export default App;
