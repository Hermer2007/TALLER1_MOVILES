import { StyleSheet, Text, View, ImageBackground, TextInput, TouchableOpacity, ScrollView, Vibration, Alert } from 'react-native'
import React, { useState, useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import { SQLiteProvider } from 'expo-sqlite'
import { useRegistroDB } from '../Services/registroBD'

function FormularioRegistro() {

    const navigation = useNavigation();
    const { iniciar, crear } = useRegistroDB();

    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const [email, setemail] = useState('');
    const [usuario, setusuario] = useState('');
    const [password, setPassword] = useState('');

    useEffect(() => {
        iniciar();
    }, []);

    async function guardarInformacion() {

        if(!nombre || !apellido || !email || !usuario || !password){
            Alert.alert("Error", "Completa todos los campos");
            return;
        }

        await crear(nombre, apellido, email, usuario, password);

        Vibration.vibrate([100,400,100]);
        Alert.alert("", "Información guardada con éxito");

        setNombre('');
        setApellido('');
        setemail('');
        setusuario('');
        setPassword('');
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
                    onChangeText={setNombre}
                />

                <Text style={styles.texto}>Apellido</Text>
                <TextInput 
                    style={styles.input} 
                    placeholder='Apellido' 
                    placeholderTextColor="#555"
                    value={apellido}
                    onChangeText={setApellido}
                />

                <Text style={styles.texto}>Email</Text>
                <TextInput 
                    style={styles.input} 
                    placeholder='Email' 
                    keyboardType="email-address"
                    placeholderTextColor="#555"
                    value={email}
                    onChangeText={setemail}
                />

                <Text style={styles.texto}>Usuario</Text>
                <TextInput 
                    style={styles.input} 
                    placeholder='Usuario' 
                    placeholderTextColor="#555"
                    value={usuario}
                    onChangeText={setusuario}
                />

                <Text style={styles.texto}>Password</Text>   
                <TextInput 
                    style={styles.input} 
                    placeholder='Password' 
                    secureTextEntry={true}
                    placeholderTextColor="#555"
                    value={password}
                    onChangeText={setPassword}
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

export default function RegistroScreen() {
    return (
        <SQLiteProvider databaseName="registro.db">
            <FormularioRegistro/>
        </SQLiteProvider>
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