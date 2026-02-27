import { StyleSheet, Text, View, ImageBackground, TextInput, TouchableOpacity,ScrollView,Vibration } from 'react-native'
import React from 'react'
import { useState } from 'react'
import { useNavigation } from '@react-navigation/native'

export default function RegistroScreen() {

    const navigation = useNavigation();
    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const [email, setemail] = useState()
    const [password, setPassword] = useState('');

    function guardarInformacion() {
  
        Vibration.vibrate([1000,4000,1000]);
    }

  return (
      
        <ImageBackground 
        source={require('../assets/images/registro3.jpg')}
        style={styles.background}
        resizeMode="cover"
        >
        <View style={styles.container}>
          <ScrollView
            contentContainerStyle={{
                flexGrow: 1,
                justifyContent: 'center',
            }}
            keyboardShouldPersistTaps="handled"
          >
          <View style={styles.formContainer}>
                <Text style={styles.titulo}>Registro de Usuario</Text>
                <Text style={styles.texto}>Nombre</Text>
                <TextInput 
                    style={styles.input} 
                    placeholder='Nombre' 
                    placeholderTextColor="#555"
                    value={nombre}
                    onChangeText={(texto)=> setNombre(texto)}
                />
                <Text style={styles.texto}>Apellido</Text>
                <TextInput 
                    style={styles.input} 
                    placeholder='Apellido' 
                    placeholderTextColor="#555"
                    value={apellido}
                    onChangeText={(texto) => setApellido(texto)}
                />
                <Text style={styles.texto}>Email</Text>
                <TextInput 
                    style={styles.input} 
                    placeholder='Email' 
                    keyboardType="email-address"
                    placeholderTextColor="#555"
                    value={email}
                    onChangeText = {(texto) => setemail(texto)}
                />
                <Text style={styles.texto}>Password</Text>   
                <TextInput 
                    style={styles.input} 
                    placeholder='Password' 
                    secureTextEntry={true}
                    placeholderTextColor="#555"
                    value={password}
                    onChangeText={ (texto)=> setPassword(texto)}
                />
                <View style={styles.buttonContainer}>
                    <TouchableOpacity 
                        style={styles.button} 
                        onPress={guardarInformacion}
                    >
                        <Text style={styles.buttonText}>Guardar</Text>
                    </TouchableOpacity>

                    <TouchableOpacity 
                        style={[styles.button, styles.cancelButton]} 
                        onPress={() => navigation.goBack()}
                    >
                        <Text style={styles.buttonText}>Cancelar</Text>
                    </TouchableOpacity>
                </View>
            </View>
          </ScrollView>
            
        </View>
        </ImageBackground>
  )
}

const styles = StyleSheet.create({

  background: { 
    flex: 1,
  },

  container: {
    flex: 1,
    justifyContent: 'center',
  },

  formContainer: {
    width: '85%',
    alignSelf: 'center',
  },

  titulo: {
    fontSize: 26,
    color: 'white',
    fontWeight: 'bold',
    marginBottom: 25,
    textAlign: 'center',
  },

  texto: {
    fontSize: 18,
    color: 'white',
    marginBottom: 5,
  },

  input: {
    width: '100%',
    height: 45,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 15,
    backgroundColor: '#d4d4d4',
  },

  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },

  button: {
    flex: 1,
    backgroundColor: '#5ed7ad',
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: 'center',
    marginHorizontal: 5,
  },

  cancelButton: {
    backgroundColor: '#ff6b6b',
  },

  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },

});