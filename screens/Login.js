import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, ActivityIndicator } from 'react-native';
import { useAuth } from '../AuthContext';
import Header from '../components/Header';

const Login = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { login } = useAuth();

  const handleSubmit = async () => {
    if (email === 'merchy@trial.com' && password === '123456789') {
      setIsLoading(true);
      try {
        await login();
        navigation.navigate('Dashboard');
      } catch (error) {
        setError('Login failed. Please try again.');
      } finally {
        setIsLoading(false);
      }
    } else {
      setError('Invalid credentials');
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Header navigation={navigation} />
      <View style={styles.formContainer}>
        <Text style={styles.title}>Login</Text>
        {error && <Text style={styles.error}>{error}</Text>}
        
        <View style={styles.formGroup}>
          <Text style={styles.label}>Email:</Text>
          <TextInput
            style={styles.input}
            value={email}
            onChangeText={setEmail}
            placeholder="merchy@trial.com"
            placeholderTextColor="#888"
            keyboardType="email-address"
            editable={!isLoading}
          />
        </View>
        
        <View style={styles.formGroup}>
          <Text style={styles.label}>Password:</Text>
          <TextInput
            style={styles.input}
            value={password}
            onChangeText={setPassword}
            placeholder="••••••••"
            placeholderTextColor="#888"
            secureTextEntry
            editable={!isLoading}
          />
        </View>
        
        <TouchableOpacity 
          style={[styles.button, isLoading && styles.buttonDisabled]} 
          onPress={handleSubmit}
          disabled={isLoading}
        >
          {isLoading ? (
            <ActivityIndicator color="white" />
          ) : (
            <Text style={styles.buttonText}>Login</Text>
          )}
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#0a0a0a',
  },
  formContainer: {
    backgroundColor: '#1a1a1a',
    margin: 20,
    padding: 20,
    borderRadius: 10,
  },
  title: {
    color: 'white',
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 20,
  },
  formGroup: {
    marginBottom: 20,
  },
  label: {
    color: 'white',
    marginBottom: 8,
    fontSize: 16,
  },
  input: {
    backgroundColor: '#0a0a0a',
    color: 'white',
    borderRadius: 5,
    padding: 12,
    borderWidth: 1,
    borderColor: '#333',
  },
  button: {
    backgroundColor: 'red',
    borderRadius: 5,
    padding: 15,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonDisabled: {
    opacity: 0.7,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
  error: {
    color: 'red',
    marginBottom: 15,
    textAlign: 'center',
  },
});

export default Login;