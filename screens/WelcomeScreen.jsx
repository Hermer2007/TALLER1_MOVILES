import { StyleSheet, Text, View, ImageBackground, TouchableOpacity } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { useFonts } from 'expo-font';

export default function WelcomeScreen() {
  const navigation = useNavigation();
  const [fontsLoaded] = useFonts({
    MontserratBlack: require('../assets/fonts/Montserrat-Black.ttf'),
    MontserratExtraLight: require('../assets/fonts/Montserrat-ExtraLight.ttf'),
    MontserratBold: require('../assets/fonts/Montserrat-Bold.ttf'),
    Betania :require('../assets/fonts/BetaniaPatmos-Regular.ttf'),
  });

  if (!fontsLoaded) {
    return null;
  }
  return (
    <ImageBackground 
      source={require('../assets/images/welcome.jpg')}
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.container}>
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text style={styles.text}>Welcome</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: { 
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center' 
},
  container: { 
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center' 
},
  text: { 
    fontSize: 70, 
    fontWeight: 'bold', 
    fontFamily: 'Betania',
    color: '#fff' }
});