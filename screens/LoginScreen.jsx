import { StyleSheet, Text, View, ImageBackground,TextInput, Image, TouchableOpacity,Vibration, Alert, ScrollView } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react'
export default function LoginScreen() {
    const navigation = useNavigation();
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    function verificarUsuario(){
        let usuarioV = 'admin';
        let passwordV = 'admin123';
        if(username === usuarioV && password === passwordV){
            navigation.navigate('Home');
        }else{
            Alert.alert("Alerta amigo","Usuario o contraseña incorrectos");
        }    

        Vibration.vibrate(1000);
    }
    return (
        <ImageBackground 
            source={require('../assets/images/login2.jpg')}
            style={styles.background}
            resizeMode="cover"
            >
            <ScrollView
                        contentContainerStyle={{
                            flexGrow: 1,
                            justifyContent: 'center',
                        }}
                        keyboardShouldPersistTaps="handled"
                    >
                <View style={styles.containerLogin}>
                <Image source={require('../assets/images/pc-game.png')} style={styles.logo}/>
                <TextInput 
                    style={styles.input} 
                    placeholder='Username' 
                    value = {username}
                    onChangeText = { (texto) => setUsername(texto)}
                />
                <TextInput 
                    style={styles.input}   
                    placeholder='Password' 
                    secureTextEntry={true} 
                    value = {password}
                    onChangeText = { (texto) => setPassword(texto) }
                />
                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.buttonLogin} onPress={verificarUsuario}>
                        <Text style={styles.buttonText}>Login</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonRegistrarse} onPress={() => navigation.navigate('Registro')}>
                        <Text style={styles.buttonText}>Registrarse</Text>
                    </TouchableOpacity>
                </View>
            
            </View>
            </ScrollView>
            
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
    buttonLogin:{
        backgroundColor: '#5ed7ad',
        paddingVertical: 10,    
        paddingHorizontal: 20,
        borderRadius: 5,
        marginBottom: 10,
        marginHorizontal: 5,
    },
    buttonRegistrarse:{
        backgroundColor: '#ff6b6b',
        paddingVertical: 10,    
        paddingHorizontal: 20,
        borderRadius: 5,
        marginBottom: 10,
        marginHorizontal: 5,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20,
    },

})