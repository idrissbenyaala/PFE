import React, { useState } from 'react';
import { TextInput, Button, StyleSheet, View, Text, ImageBackground, TouchableOpacity  } from 'react-native';

export default function LoginScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    console.log('Logging in with:', email, password);
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../img/eatorder.png')}
        style={styles.imageBackground}
      >
                
      </ImageBackground>

      <View style={styles.formContainer}>
        <Text style={styles.title}>Se Connecter</Text>
        
        <TextInput
          style={styles.input}
          placeholder="Adresse email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />
        
        <TextInput
          style={styles.input}
          placeholder="Mot de passe"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
        
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Se Connecter</Text>
        </TouchableOpacity>  
        <TouchableOpacity style={styles.buttongoogle} onPress={handleLogin}>
          <Text style={styles.buttonTextgoogle}>Continuer avec google</Text>
        </TouchableOpacity>
            </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  
  imageBackground: {
    flex: 1, 
    width: '100%',
    height: '100%', 
    justifyContent: 'center', 
  },
  formContainer: {
    flex: 2, 
    justifyContent: 'center', 
    backgroundColor: 'white', 
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 50,
  },
  input: {
    height: 40,
    borderColor: '#DEE2E6',
    borderWidth: 1,
    marginBottom: 12,
    paddingLeft: 8,
    borderRadius: 15 ,
    backgroundColor: 'white', 
  },
  button: {
    backgroundColor: 'red',
    paddingVertical: 12,
    borderRadius: 5,
    marginTop: 16,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  buttongoogle: {
    backgroundColor: '#4285F4',
    paddingVertical: 12,
    borderRadius: 5,
    marginTop: 16,
    alignItems: 'center',
  },
  buttonTextgoogle: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
