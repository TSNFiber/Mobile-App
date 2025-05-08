import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useAuth } from '../AuthContext';
import Home from '../screens/Home';
import Fortnite from '../screens/Fortnite';
import Login from '../screens/Login';
import Dashboard from '../screens/Dashboard';
import { Ionicons } from '@expo/vector-icons';

const Drawer = createDrawerNavigator();

const CustomDrawerContent = (props) => {
  const { isLoggedIn } = useAuth();

  return (
    <View style={styles.drawerContainer}>
      <View style={styles.drawerHeader}>
        <Text style={styles.drawerTitle}>Merchy</Text>
      </View>
      
      <View style={styles.drawerContent}>
        <TouchableOpacity 
          style={styles.drawerItem}
          onPress={() => props.navigation.navigate('Home')}
        >
          <Ionicons name="game-controller" size={24} color="white" />
          <Text style={styles.drawerItemText}>Games</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.drawerItem}
          onPress={() => props.navigation.navigate('Fortnite')}
        >
          <Ionicons name="gift" size={24} color="white" />
          <Text style={styles.drawerItemText}>Drops</Text>
        </TouchableOpacity>

        {isLoggedIn ? (
          <TouchableOpacity 
            style={styles.drawerItem}
            onPress={() => props.navigation.navigate('Dashboard')}
          >
            <Ionicons name="person" size={24} color="white" />
            <Text style={styles.drawerItemText}>Dashboard</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity 
            style={styles.drawerItem}
            onPress={() => props.navigation.navigate('Login')}
          >
            <Ionicons name="log-in" size={24} color="white" />
            <Text style={styles.drawerItemText}>Login</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default function DrawerNavigator() {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      screenOptions={{
        headerShown: false,
        drawerStyle: {
          backgroundColor: '#1a1a1a',
          width: '70%',
        },
      }}
    >
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Fortnite" component={Fortnite} />
      <Drawer.Screen name="Login" component={Login} />
      <Drawer.Screen name="Dashboard" component={Dashboard} />
    </Drawer.Navigator>
  );
}

const styles = StyleSheet.create({
  drawerContainer: {
    flex: 1,
    backgroundColor: '#1a1a1a',
  },
  drawerHeader: {
    height: 150,
    backgroundColor: 'black',
    justifyContent: 'flex-end',
    padding: 20,
  },
  drawerTitle: {
    color: 'white',
    fontSize: 28,
    fontWeight: 'bold',
  },
  drawerContent: {
    padding: 20,
  },
  drawerItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#333',
  },
  drawerItemText: {
    color: 'white',
    fontSize: 16,
    marginLeft: 15,
    flex: 1,
  },
}); 