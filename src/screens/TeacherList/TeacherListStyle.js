import {StyleSheet,Platform} from 'react-native'


const styles = StyleSheet.create({
 
    container:{
       backgroundColor:'#f0f0f7',
       flex:1,
       paddingTop:Platform.OS === 'android'?23:0,
     
    },

   
   
    

})

export default styles
