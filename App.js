import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from '@react-navigation/native';

//import { MainLayout } from './src/screens/MainLayout'
import CustomDrawer from './src/navigation/CustomDrawer'

import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';

import {createStore, applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import thunk from 'redux-thunk'
import rootReducer from './src/stores/rootReducer';

const Stack = createStackNavigator();
const store = createStore(
    rootReducer,
    applyMiddleware(thunk)
)
const App = () => {

    const [fontsLoaded] = useFonts({
        'Poppins-Black': require('./src/assets/fonts/Poppins-Black.ttf'),
        'Poppins-Bold': require('./src/assets/fonts/Poppins-Bold.ttf'),
        'Poppins-SemiBold': require('./src/assets/fonts/Poppins-SemiBold.ttf'),
        'Poppins-Regular': require('./src/assets/fonts/Poppins-Regular.ttf'),
      });
      if (!fontsLoaded) {
        return (
          <AppLoading />
        )
      } else {
        return (
            <Provider store={store}>
            <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false
                }}
                initialRouteName={'Home'}
                //headerShown={false}
            >
                <Stack.Screen
                    name="Home"
                    component={CustomDrawer}
                    options={{header: () => null}}
                    // screenOptions={{
                    //   headerShown: false
                    // }}
                    // headerShown={false}
                />
            </Stack.Navigator>
        </NavigationContainer>
        </Provider>
        );
      }      
}

export default App

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Demo Preact + Expo web</Text>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
