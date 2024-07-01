import React, { useEffect } from 'react';
import { View,Text, Image, StyleSheet, ActivityIndicator } from 'react-native';

const SplashScreen = ({ navigation }) => {
    useEffect(() => {
        setTimeout(() => {
           navigation.navigate('home'); // Navigate to the next screen after 5 seconds
        }, 2000); // 5000 milliseconds = 5 seconds
    }, [navigation]);  
    return (
       
        <View style={{ flexDirection: 'column', height: '100%', width: "100%",backgroundColor: '#FFFDD0', alignItems: 'center', justifyContent: 'center' }}>
            <Image
                source={require('../asserts/Navals.jpg')}
                style={styles.image}
                resizeMode="contain"
            />
             <Text style={{textAlign:"center",fontWeight:"bold",color:"blue",fontSize:20,marginTop:200}}>Powered By</Text>
             <Image
                source={require('../asserts/logo.jpg')}
                style={styles.logo}
                resizeMode="contain"
            />
        </View>

        
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
    },
    image: {
        marginTop:200,
        height:200,
        width:"100%",
        alignItems:"center",
    },
   logo:{
    height:35
   },
    loader: {
        position: 'absolute',
        bottom: 20,
    },
});

export default SplashScreen;