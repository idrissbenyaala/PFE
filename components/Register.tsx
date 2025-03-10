import React, { useState } from 'react';
import { TextInput, Button, StyleSheet, View, Text, ImageBackground, TouchableOpacity , Linking } from 'react-native';
// import RNPickerSelect from 'react-native-picker-select';
import {NavigationContainer} from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';
import Login from './Login';
// import { Dropdown } from 'react-native-element-dropdown';
export default function Register() {
  const navigation = useNavigation()
const [nom, setNom] = useState('');
const [prenom, setPrenom] = useState('');
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [ConfirmPassword, setConfirmPassword] = useState('');
  const [tel, setTel] = useState('');
  const [genre, setGenre] = useState(null);

 
  const genreOptions = [
    { label: 'Homme', value: 'homme' },
    { label: 'Femme', value: 'femme' },
  ];

  const handleRegister = () => {
    console.log('Prénom:', prenom, 'Nom:', nom, 'Email:', email, 'Genre:', genre);
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../img/eatorder.png')} 
        style={styles.imageBackground}
      >
      </ImageBackground>

      <View style={styles.formContainer}>
        <Text style={styles.title}>S'inscrire</Text>

        <View style={styles.nomPrenom}>

        <TextInput
            style={[styles.input, styles.halfWidth]} 
            placeholder="Prénom"
          value={prenom}
          onChangeText={setPrenom}
        />
         <TextInput
            style={[styles.input, styles.halfWidth]} 
            placeholder="Nom de famille"
          value={nom}
          onChangeText={setNom}
        />
        </View>
        <TextInput
          style={styles.input }
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
        <TextInput
          style={styles.input}
          placeholder="Confirmer le mot de passe"
          value={ConfirmPassword}
          onChangeText={setConfirmPassword}
          secureTextEntry
        />

          {/* <Dropdown
          style={styles.dropdown}
          data={genreOptions}
          labelField="label"
          valueField="value"
          placeholder="Genre"
          value={genre}
          onChange={item => setGenre(item.value)}
        /> */}
        <TextInput
          style={styles.input}
          placeholder="Numero"
          value={tel}
          onChangeText={setTel}

        />

        <TouchableOpacity style={styles.button} onPress={handleRegister}>
          <Text style={styles.buttonText}>S'inscrire</Text>
          {/* <Text style={styles.buttonText}>go login</Text> */}

        </TouchableOpacity>  
        <TouchableOpacity onPress={() => (navigation as any).navigate('Login')}>
        <Text style={styles.loginText}>Vous avez déjà un compte ? Connectez-vous</Text>
        </TouchableOpacity>
            </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  loginText: {
    color: 'blue',
    textAlign: 'center',
    marginTop: 10,
    textDecorationLine: 'underline',
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
    marginBottom: 40,
  },
  dropdown: {
    height: 40,
    borderColor: '#DEE2E6',
    borderWidth: 1,
    borderRadius: 15,
    paddingHorizontal: 8,
    backgroundColor: 'white',
    marginBottom: 12,
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
 

  halfWidth: {
    width: '49%', 
  },
  nomPrenom: {
    flexDirection: 'row', 
    justifyContent: 'space-between', 
  },
  selectContainer: {
    marginBottom: 10,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  
});
// const pickerSelectStyles = StyleSheet.create({
//     inputIOS: {
//       height: 40,
//       borderColor: '#ccc',
//       borderWidth: 1,
//       marginBottom: 12,
//       paddingLeft: 8,
//       borderRadius: 5,
//       backgroundColor: 'white',
//     },
//     inputAndroid: {
//       height: 40,
//       borderColor: '#ccc',
//       borderWidth: 1,
//       marginBottom: 12,
//       paddingLeft: 8,
//       borderRadius: 5,
//       backgroundColor: 'white',
//     },
//   });
