import React, { Component } from 'react';
import { View, Image, StyleSheet, Text, ImageBackground, TouchableHighlight, Animated } from 'react-native';
import firebase from './FirebaseConnection';


export default class Preload extends Component
{

    static
    navigationOptions = {
        title: 'Home',
        header: null
    };

    constructor(props) {
        super(props);
        this.state = {
            academia:'',
            opacityA: new Animated.Value(0),
            opacityB: new Animated.Value(0)
        }


        firebase.auth().onAuthStateChanged((user) => {
            if(user) {

            firebase.database().ref('users').child(user.uid).once('value').then((snapshot)=>{
                let state = this.state;
                state.academia = snapshot.val().academia;
                this.setState(state);

            });


            this.props.navigation.navigate('Interna');
        }
    else
        {
            this.props.navigation.navigate('Home');
        }
    });

    Animated.sequence([
        Animated.timing(
            this.state.opacityA,
            {
                toValue:1,
                duration:1000
            }
        ),
        Animated.timing(
            this.state.opacityA,
            {
                toValue:0,
                duration:1000
            }
        ),
        Animated.timing(
            this.state.opacityB,
            {
                toValue:1,
                duration:2000
            }
        ),
        Animated.timing(
            this.state.opacityB,
            {
                toValue:0,
                duration:2000
            }
        )
    ]).start();

}


    render() {
    return (
            <ImageBackground source={require('../assets/images/fundo-start-p1.jpg')} style={styles.bg}>
            <View style={styles.container}>

                    <View style={styles.animatedArea}>
                    <Animated.View style={{opacity:this.state.opacityA}}>
                        <Image
                        source={require('../assets/images/brand-preload-1.jpg')}
                        style={{position:'absolute', right:-200, bottom:-20, width:400}} />
                    </Animated.View>

                    <Animated.View style={{opacity:this.state.opacityB}}>
                        <Image
                        source={require('../assets/images/brand-preload-2.jpg')}
                        style={{position:'absolute', right:-200, bottom:-20, width:400}} />
                    </Animated.View>
                    </View>


            </View>
            </ImageBackground>

    );
}
}
const styles = StyleSheet.create({
    bg:{
        flex:1,
        width:null
    },
    buttonArea:{
        margin:30
    },
    animatedArea:{
        position:'absolute',
        width:370,
        height:135,
        marginTop:300,
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center'
    },
    button:{
        backgroundColor:'#ffffff',
        margin:10,
        height:40,
        width:200,
        justifyContent:'center'
    },
    btnText:{
        textAlign:'center',
        fontSize:20
    },
    icone:{
        width:26,
        height:26
    },
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'transparent'
    },
    cTop:{
        height:200,
        backgroundColor:'#000000',
        alignItems:'center',
        marginTop:0

    },
    cMid:{
        height:140,
        backgroundColor:'#FFFFFF',
        alignItems:'center',
        justifyContent:'center',
        borderTopRightRadius:20,
        borderTopLeftRadius:20
    },
    logo:{
        borderRadius:70,
        width:140,
        height:140,
        borderWidth:2,
        borderColor:'#FFFFFF',
        marginTop:-120

    },
    cBottom:{
        flex:1,
        backgroundColor:'#FFFFFF',
        padding:14

    },
    lightTitle:{
        fontSize:32,
        fontWeight:'bold',
        marginTop:40,
        color:'#FFFFFF',
        letterSpacing:4
    },
    darkTitle:{
        marginTop:100,
        height:40,
        fontSize:30,
        color:'#000000',
        textAlign:'center'

    },
    txt:{
        marginTop:5,
        fontSize:14,
        color:'#000000'
    }
});