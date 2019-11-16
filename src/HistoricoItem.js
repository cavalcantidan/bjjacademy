import React, { Component } from 'react';
import { View, Image, StyleSheet, TextInput, Text, Button, TouchableHighlight } from 'react-native';
import moment from 'moment';
import 'moment/locale/pt-br';
import firebase from './FirebaseConnection';

export default class HistoricoItem extends Component {

    constructor(props)
    {
        super(props);

        let alucli =
                <View>
                    <Text style={styles.txtT}>{this.props.data.aluno}</Text>
                </View>;

            let bg = '#9ed8cd';

            if(this.props.data.type == 'despesa') {
                bg = '#d17871';
                alucli = <Text style={styles.txtT}>{this.props.data.empresa}</Text>;

            }

            if(this.props.data.pagamento == 'dinheiro' || 'Dinheiro'){
                modoPag =
                    <View>
                       <Text style={styles.txt}>a vista</Text>
                    </View>;
            } else {
                modoPag =
                    <View>
                       <Text style={styles.txt}>parcelado</Text>
                    </View>;
            }

        this.state = {
            bg:bg,
            alucli:alucli,
            modoPag:modoPag,
            historico:[]
        }


    }


   render() {
           return(

               <View style={styles.container}>

                   <View style={styles.areaContainer}>

                       <View style={styles.area}>


                           <View style={styles.lefter}>
                           {this.state.alucli}
                           <Text style={styles.txt}>{this.props.data.produto}</Text>
                           <Text style={styles.txt2}>R$ {this.props.data.valor}</Text>
                           </View>

                           <View style={styles.righter}>
                               <Text style={styles.txt3}>{this.props.data.selldata}</Text>
                               <Text style={styles.txt3}>{this.props.data.sellhora}</Text>
                               <Text style={styles.txt3}>{this.props.data.meumes}</Text>
                               {this.state.modoPag}

                           </View>

                           <View style={styles.areaDel}>
                               <View style={styles.btDel}>
                                   <View style={[styles.circleArea, {backgroundColor:this.state.bg}]}>
                                   </View>
                               </View>
                           </View>

                       </View>

                   </View>

               </View>




           );


       }

   }

   const styles = StyleSheet.create({

       container: {
           flex: 1
       },
       areaContainer:{
           flex:1,
           zIndex:1,
           margin:2,
           paddingRight:2,
           flexDirection:'row'
       },
       areaDel:{
           height:35,
           width:90,
           position:'absolute',
           left:-10,
           alignSelf:'center',
           justifyContent:'flex-start',
       },
       btDel:{
           width:85,
           height:35,
           marginLeft:-10,
           backgroundColor:'#ffffff',
           borderTopRightRadius:11,
           borderBottomRightRadius:11,
           justifyContent:'center',
           alignItems:'center'
       },
       circleArea:{
           height: 30,
           width:30,
           borderRadius:15
       },
       area:{
           flex:1,
           flexDirection:'row',
           alignItems:'stretch',
           justifyContent:'space-around',
           paddingRight:10,
           marginLeft:-30,
           width:null,
           borderRadius:15,
           backgroundColor:'#fbfbfb',

       },
       lefter:{
           alignItems:'flex-start',
           marginLeft:120,
           padding:10,
           width:300,
           backgroundColor:'transparent',
           position:'relative'

       },
       righter:{
           alignItems:'flex-end',
           justifyContent:'flex-end',
           marginRight:22,
           width:100,
           padding:10,
           backgroundColor:'transparent',
           borderRadius:15,
           position:'relative'

       },
       buttonArea:{
           margin:30
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
           fontSize:30,
           color:'#000000'

       },
       darkTitle2:{
               fontSize:26,
               fontWeight:'bold',
               color:'#af1c13',
               alignSelf:'center',
               justifyContent:'center',
               marginLeft:40

           },
       txt:{
           fontSize:16,
           color:'#444444'
       },
       txtT:{
           fontSize:18,
           color:'#444444',
           fontWeight:'bold'
       },
       txt2:{
           fontSize:20,
           fontWeight:'bold',
           borderRadius:7,
           height:30,
           padding:3,
           margin:2
       },
       txt3:{
           fontSize:13,
           color:'#000000',
           textAlign:'right'
       },
       txt4:{
           fontSize:16,
           color:'#000000',
           fontWeight:'bold'
       }
   });