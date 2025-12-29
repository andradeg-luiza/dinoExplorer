import React from 'react';
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './src/navigation/app-navigator';
import { globalStyles } from './src/theme/app-styles';

function App() {
  return (
    <View style={globalStyles.appContainer}>
      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>
    </View>
  );
}

export default App;
