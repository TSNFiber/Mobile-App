import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, ActivityIndicator } from 'react-native';
import { useAuth } from '../AuthContext';
import Header from '../components/Header';

const Dashboard = ({ navigation }) => {
  const { logout } = useAuth();
  const [isLoading, setIsLoading] = useState(false);

  const handleLogout = async () => {
    setIsLoading(true);
    try {
      await logout();
      navigation.navigate('Login');
    } catch (error) {
      console.error('Logout failed:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <ScrollView style={styles.container}>
      <Header navigation={navigation} />
      
      <View style={styles.content}>
        <Text style={styles.title}>Dashboard</Text>
        
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Profile Information</Text>
          <Text style={styles.text}>Name: John Doe</Text>
          <Text style={styles.text}>Birthdate: January 1, 1990</Text>
          <Text style={styles.text}>Account Balance: $500.00</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Recent Orders</Text>
          <Text style={[styles.text, styles.italic]}>No recent orders</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Addresses</Text>
          <Text style={styles.text}>123 Gaming Street</Text>
          <Text style={styles.text}>Postal Code: 12345</Text>
          <Text style={styles.text}>Phone: (555) 123-4567</Text>
        </View>

        <TouchableOpacity 
          style={[styles.signoutButton, isLoading && styles.buttonDisabled]} 
          onPress={handleLogout}
          disabled={isLoading}
        >
          {isLoading ? (
            <ActivityIndicator color="white" />
          ) : (
            <Text style={styles.signoutButtonText}>Sign Out</Text>
          )}
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0a0a0a',
  },
  content: {
    padding: 20,
  },
  title: {
    color: '#e31010',
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20,
    textTransform: 'uppercase',
  },
  section: {
    backgroundColor: '#1a1a1a',
    borderRadius: 10,
    padding: 20,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#333',
  },
  sectionTitle: {
    color: '#ff0000',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 15,
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#333',
  },
  text: {
    color: 'white',
    fontSize: 16,
    marginVertical: 8,
  },
  italic: {
    fontStyle: 'italic',
    color: '#888',
  },
  signoutButton: {
    backgroundColor: 'red',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 30,
    marginHorizontal: 80,
  },
  buttonDisabled: {
    opacity: 0.7,
  },
  signoutButtonText: {
    color: 'white',
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
});

export default Dashboard;