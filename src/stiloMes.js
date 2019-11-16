     import React, { Component } from 'react';
     import { View, Image, StyleSheet, Text, FlatList, TouchableHighlight, StatusBar, ImageBackground, Platform, TouchableOpacity, Alert, Modal, ScrollView  } from 'react-native';


     const styles = StyleSheet.create({

             icone:{
                 width:26,
                 height:26
             },
             container:{
                 flex:1,
                 flexDirection:'column'
             },
             bg:{
                 flex:1,
                 width:null,
                 zIndex:1
             },
             propImg:{
                 height:'100%',
                 width:'100%',
                 position:'absolute',
                 top:14,
                 alignSelf:'center'
             },
             modalIn:{
                 position:'absolute',
                 height:'40%',
                 top:1,
                 zIndex:7,
                 backgroundColor:'#ffffff',
                 justifyContent:'center',
                 alignItems:'center',
                 borderBottomRightRadius:25,
                 borderBottomLeftRadius:25
             },
             modalIn2:{
                 position:'absolute',
                 height:550,
                 width: 300,
                 bottom:130,
                 right:40,
                 elevation:7,
                 borderBottomEndRadius:15,
                 borderColor:'#ffffff'
             },
             areaMes:{
                 height:56,
                 backgroundColor:'#bd191a',
                 width:200,
                 borderRadius:25,
                 padding:5,
                 flexDirection:'row',
                 alignItems:'center',
                 justifyContent:'center',
                 marginTop:14

             },
             meuMes:{
                 fontSize:13,
                 fontWeight:'bold',
                 color:'#000000',
                 backgroundColor:'#ffffff',
                 height:40,
                 width:40,
                 alignItems:'center',
                 justifyContent:'center',
                 borderRadius:19,
                 paddingRight:5,
                 paddingLeft:5,
                 paddingBottom:5,
                 paddingTop:7,
                 margin:3
             },
             modalText:{
                 fontSize:18,
                 color:'#000000',
                 borderBottomWidth:1,
                 height:40,
                 alignItems:'center',
                 justifyContent:'center',
                 padding:4,
                 borderBottomColor:'#000000'
             },
             saldoArea:{
                 position:'absolute',
                 height:'68%',
                 width:'100%',
                 padding:10,
                 top:1,
                 right:0,
                 zIndex:3,
                 alignItems:'center'
             },
             saldo:{
                 textAlign:'center',
                 fontSize:25,
                 color:'#ffffff',
                 paddingBottom:5
             },
             saldoValor:{
                 textAlign:'center',
                 fontSize:45,
                 fontWeight:'bold',
                 color:'#ffffff',
                 paddingBottom:5
             },
             divArea:{
                 height:'14%',
                 width:'100%',
                 padding:2,
                 zIndex:4,
                 marginTop:2

             },
             bottomArea:{
                 position:'absolute',
                 height:'30%',
                 width:'100%',
                 padding:20,
                 zIndex:5,
                 bottom:-25

             },
             historico:{
                 padding:5,
                 backgroundColor:'transparent',
                 zIndex:9
             },
             historicoArea:{
                 flex:1,
                 padding:1,
                 width:'100%',
                 backgroundColor:'transparent',
                 zIndex:8
             },

             btnsArea:{
                 flexDirection:'row',
                 height:70,
                 alignItems:'center',
                 justifyContent:'flex-start',
                 paddingTop:20,
                 paddingBottom:5,
                 backgroundColor:'#bd191a',
                 marginTop:-5,
                 borderTopRightRadius:25,
                 borderTopLeftRadius:25,
                 elevation:20

             },
             button:{
                 backgroundColor:'transparent',
                 height:40,
                 marginLeft:30
             },
             btnText:{
                 textAlign:'center',
                 fontSize:20,
                 color:'#ffffff',
                 fontWeight:'bold'
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
                 fontSize:20,
                 fontWeight:'bold',
                 marginTop:4,
                 color:'#FFFFFF',
                 letterSpacing:4,
                 textAlign:'center',
                 borderTopWidth:1,
                 paddingTop:10,
                 borderTopColor:'#ffffff'
             },
             darkTitle:{
                 fontSize:22,
                 marginTop:4,
                 color:'#000000',
                 letterSpacing:4,
                 textAlign:'center',
                 paddingTop:10,
                 fontFamily:'sans-serif-medium'
             },
             txt:{
                 fontSize:14,
                 color:'#000000'
             },
             TouchableOpacityStyle: {
                 position: 'absolute',
                 width:'100%',
                 height: 45,
                 alignItems: 'center',
                 justifyContent: 'center',
                 right:1,
                 top:'40%',
                 backgroundColor:'transparent',
                 borderRadius:15,
                 elevation:0,
                 zIndex:6
             },
             FloatingButtonStyle: {
                 resizeMode: 'contain',
                 width: 65,
                 height: 45,
                 borderRadius:20
             },
             FloatingButtonStyle2: {
                 right:39,
                 bottom:13
             },
             closebt:{
                 fontSize:17,
                 fontWeight:'bold',
                 marginBottom:5,
                 padding:5,
                 color:'#ffffff'
             },
             closebt2:{
                 fontSize:17,
                 fontWeight:'bold',
                 padding:5,
                 color:'#000000'
             },
             modalStart:{
                 height:30,
                 flexDirection:'row',
                 color:'#000000',
                 padding:3,
                 alignItems:'center',
                 justifyContent:'center'
             }

     });

     export default styles;