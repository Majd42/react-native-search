import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Image, TouchableHighlight, Button, Alert, ImageBackground } from 'react-native';


function WelcomeScreen(props) {
    return (
        <ImageBackground style={styles.background} source={require('../assets/background.jpg')} >
            <View style={styles.logoContainer}>
                <Image style={styles.logo} source={require('../assets/logo-red.png')} />
                <Text style={{marginTop: 5}}>Find Your Best Food</Text>

            </View>
            {/* <View style={styles.loginButton}></View>
            <View style={styles.RegisterButton}></View> */}
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    
    background: {
        flex: 1,
        justifyContent:'flex-end',
        width: '100%',
        
    },
  
    // loginButton: {
    //     width: '100%',
    //     height: 70,
    //     backgroundColor: '#fc5c65'
    // },
    // RegisterButton: {
    //     width: '100%',
    //     height: 70,
    //     backgroundColor: '#4ecdc4'
    // },

    logo: {
        width: 100,
        height: 100,
        
    },


    logoContainer: {
        position: 'absolute',
        top: 70,
        alignSelf: 'center',
        alignItems:'center'
    }
   
  });

export default WelcomeScreen;