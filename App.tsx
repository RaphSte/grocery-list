import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';
import { Button, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import {Text} from "./components/Themed";
import Home from "./components/Home";
import EditScreenInfo from "./components/EditScreenInfo";
import CreationDialog from "./components/CreationDialog";
import Groceries from "./components/Groceries";


class HomeScreen extends React.Component<{ navigation: any }> {
  render() {
    let {navigation} = this.props;
    return (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <Button
              onPress={() => navigation.navigate('Notifications')}
              title="Go to notifications"
          />
        </View>
    );
  }
}

class NotificationsScreen extends React.Component<{ navigation: any }> {
  render() {
    let {navigation} = this.props;
    return (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <Button onPress={() => navigation.goBack()} title="Go back home"/>
            <Text >Listststststs</Text>
        </View>
    );
  }
}

const Drawer = createDrawerNavigator();

export default function App() {
  return (
      <NavigationContainer>
        <Drawer.Navigator initialRouteName="Home">
          <Drawer.Screen name="Home" component={Home} />
          <Drawer.Screen name="Notifications" component={NotificationsScreen} />
          <Drawer.Screen name="CreationDialog" component={CreationDialog} />
          <Drawer.Screen name="Groceries" component={Groceries} />
        </Drawer.Navigator>
      </NavigationContainer>
  );
}



//
// export default function App() {
//   const isLoadingComplete = useCachedResources();
//   const colorScheme = useColorScheme();
//
//   if (!isLoadingComplete) {
//     return null;
//   } else {
//     return (
//       <SafeAreaProvider>
//         <Navigation colorScheme={colorScheme} />
//         <StatusBar />
//       </SafeAreaProvider>
//     );
//   }
// }
