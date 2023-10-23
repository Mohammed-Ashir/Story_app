import * as React from 'react';
// import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Storyadded from './src/Storyadded';
import StoryScreen from './src/StoryScreen';
import StoryViewed from './src/StoryViewed';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Storyadded" component={Storyadded} />
        <Stack.Screen name="StoryViewed" component={StoryViewed} />
        <Stack.Screen name="StoryScreen" component={StoryScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
