import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import SanPhamScreen from './redux/screens/SanPhamScreen';
import store from "./redux/store/store";
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import AddPhamScreen from './redux/screens/AddPhamScreen';
import EditSanPhamScreen from './redux/screens/EditSanPhamScreen';
const stack = createStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <stack.Navigator>
          <stack.Screen name='SanPhamScreen' component={SanPhamScreen}></stack.Screen>
          <stack.Screen name='AddSanPham' component={AddPhamScreen}></stack.Screen>
           <stack.Screen name='editSanPham' component={EditSanPhamScreen}></stack.Screen>
        </stack.Navigator>
      </NavigationContainer>
      {/* <SanPhamScreen></SanPhamScreen> */}
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
