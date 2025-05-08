import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/Home';
import Fortnite from '../screens/Fortnite';
import Login from '../screens/Login';
import Dashboard from '../screens/Dashboard';

const Stack = createStackNavigator();

export default function AppNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Fortnite" component={Fortnite} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Dashboard" component={Dashboard} />
    </Stack.Navigator>
  );
}