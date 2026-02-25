import { StyleSheet, Text, View, ImageBackground,TextInput, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';

export default function LoginScreen() {
  const navigation = useNavigation();
  return (
    <ImageBackground 
          source={require('../assets/images/login.jpg')}
          style={styles.background}
          resizeMode="cover"
        >
        <View style={styles.containerLogin}>
            <Image source={require('../assets/images/pc-game.png')} style={styles.logo}/>
            <TextInput style={styles.input} placeholder='Username' />
            <TextInput style={styles.input} placeholder='Password' secureTextEntry={true} />

            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText} onPress={() => navigation.navigate('Home')}>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Registro')}>
                <Text style={styles.buttonText}>Registrarse</Text>
            </TouchableOpacity>
        </View>
    </ImageBackground>
   
  )
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    input:{
        width: 200,
        height: 40,
        backgroundColor: '#fff',
        marginBottom: 10,
        paddingHorizontal: 10,
        borderRadius: 5,
    },
    logo:{
        width: 100,
        height: 100,
        marginBottom: 20,
    },
    containerLogin:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    button:{
        backgroundColor: '#5ed7ad',
        paddingVertical: 10,    
        paddingHorizontal: 20,
        borderRadius: 5,
        marginBottom: 10,
    },


})