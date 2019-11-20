import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default class App extends React.Component {

  constructor(props) {
   super(props);
   this.state = {
     yazi1: '',
     yazi2: '',
     yazi3: '',
     yazi4: '',
     yazi5: '',
     yazi6: '',
     renk:'yellow',
     sonuc:'',
     a1:'',
     a2:'',
     sayac:0,
   };
  }
  k1(b1){

    this.setState({
      yazi1:'Kirmizi',
      sayac:parseInt(this.state.sayac)+1,  
        })
        if(this.state.sayac==1) 
        {
        this.setState({
          a1:b1,
           })
          }
          
        if(this.state.sayac==2) 
        { 
          this.setState({
            a2:b1,
             })
          if(this.state.a1==this.state.a2)
          this.setState({
          renk:'green',
           })
           else{
            this.setState({
            a1:'',
            a2:'',
            sayac:0,
            renk:'yellow',
           
          })
           }
        }
      }   

  k6(b1){

    this.setState({
      yazi6:'Red',
      sayac:parseInt(this.state.sayac)+1,
        })
        if(this.state.sayac==1) 
        {
        this.setState({
          a1:b1,
           })
          }
          
        if(this.state.sayac==2) 
        { 
          this.setState({
            a2:b1,
            sayac:0,
             })
             if(this.state.a1==this.state.a2)
             this.setState({
             renk:'green',
              })
              else{
               this.setState({
               a1:'',
               a2:'',
               sayac:0,
               renk:'yellow',
              
             })
              }
           }
         }   
   

  k2(b2){
    this.setState({
      yazi2:'Mavi',
      sayac:parseInt(this.state.sayac)+1,      
        })
        if(this.state.sayac==1) 
        {
        this.setState({
          a1:b2,
           })
          }
          
        if(this.state.sayac==2) 
        { 
          this.setState({
            a2:b2,
            sayac:0,
             })
             if(this.state.a1==this.state.a2)
             this.setState({
             renk:'green',
              })
              else{
               this.setState({
               a1:'',
               a2:'',
               sayac:0,
               renk:'yellow',
              
             })
              }
           }
         }   
   
  k4(b2){
    this.setState({
      yazi4:'Blue',
      sayac:parseInt(this.state.sayac)+1,
      a1:b2,
        })
        if(this.state.sayac==1) 
        {
        this.setState({
          a1:b2,
           })
          }
          
        if(this.state.sayac==2) 
        { 
          this.setState({
            a2:b2,
            sayac:0,
             })
             if(this.state.a1==this.state.a2)
             this.setState({
             renk:'green',
              })
              else{
               this.setState({
               a1:'',
               a2:'',
               sayac:0,
               renk:'yellow',
              
             })
              }
           }
         }   
   
  

  k3(b3){
    this.setState({
      yazi3:'Yesil',
      sayac:parseInt(this.state.sayac)+1,
      a1:b3,
        })
        if(this.state.sayac==1) 
        {
        this.setState({
          a1:b3,
           })
          }
          
        if(this.state.sayac==2) 
        { 
          this.setState({
            a2:b3,
            sayac:0,
             })
             if(this.state.a1==this.state.a2)
             this.setState({
             renk:'green',
              })
              else{
               this.setState({
               a1:'',
               a2:'',
               sayac:0,
               renk:'yellow',
              
             })
              }
           }
         }   
   
  k5(b3){
    this.setState({
      yazi5:'Green',
      sayac:parseInt(this.state.sayac)+1,
        })
        if(this.state.sayac==1) 
        {
        this.setState({
          a1:b3,
           })
          }
          
        if(this.state.sayac==2) 
        { 
          this.setState({
            a2:b3,
            sayac:0,
             })
             if(this.state.a1==this.state.a2)
             this.setState({
             renk:'green',
              })
              else{
               this.setState({
               a1:'',
               a2:'',
               sayac:0,
               renk:'yellow',
             })
              }
           }
         }      
  render(){
  return (
    <View style={styles.container} >
      <View style={{
        flex:5,
        width:'100%', 
        height:'100%',
        alignItems:'center',
        justifyContent:'flex-end',
        backgroundColor:'pink'}}>
        <View style={{flexDirection:'row',backgroundColor:''}}>
          <TouchableOpacity style={[styles.kart,{backgroundColor:this.state.renk}]}
           onPress={()=>this.k1("b1")}>
          <Text style={{ fontSize: 25, fontWeight: 'normal', color: 'red' }} >
        {this.state.yazi1}
        </Text>

          </TouchableOpacity>
          <TouchableOpacity style={[styles.kart,{backgroundColor:this.state.renk}]}
           onPress={()=>this.k2("b2")}>
          <Text style={{ fontSize: 25, fontWeight: 'normal', color: 'blue' }} >
        {this.state.yazi2}
        </Text>

          </TouchableOpacity>
          <TouchableOpacity style={[styles.kart,{backgroundColor:this.state.renk}]}
           onPress={()=>this.k3("b3")}>
          <Text style={{ fontSize: 25, fontWeight: 'normal', color: 'green' }} >
        {this.state.yazi3}
        </Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={{ 
        flex:5,
        width:'100%', 
        height:'100%',
        alignItems:'center',
        justifyContent:'flex-start',
        backgroundColor:'pink'}}>
        <View style={{flexDirection:'row',backgroundColor:''}}>
          <TouchableOpacity style={[styles.kart,{backgroundColor:this.state.renk}]} 
          onPress={()=>this.k4("b2")}>
          <Text style={{ fontSize: 25, fontWeight: 'normal', color: 'blue' }} >
        {this.state.yazi4}
        </Text>

          </TouchableOpacity>
          <TouchableOpacity style={[styles.kart,{backgroundColor:this.state.renk}]}
           onPress={()=>this.k5("b3")}>
          <Text style={{ fontSize: 25, fontWeight: 'normal', color: 'green' }} >
        {this.state.yazi5}
        </Text>

          </TouchableOpacity>
          <TouchableOpacity style={[styles.kart,{backgroundColor:this.state.renk}]}
           onPress={()=>this.k6("b1")}>
          <Text style={{ fontSize: 25, fontWeight: 'normal', color: 'red' }} >
        {this.state.yazi6}
        </Text>

          </TouchableOpacity>

        </View>
      </View>

    
    <Text>{this.state.renk}</Text>
       
     </View>



  );
}
}
 const styles = StyleSheet.create({
  container: {
    flex: 2,
    backgroundColor: '#fff',
    alignItems: 'flex-start',
    justifyContent:'center',
  },

  
  kart:{
    
    width:100, 
    height:200,
    margin:'3%',
    borderWidth:1,
    justifyContent:'center',
  },
});
