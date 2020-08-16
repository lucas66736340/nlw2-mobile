import {StyleSheet,Platform} from 'react-native'


const styles = StyleSheet.create({
 
    container:{
       backgroundColor:'#8257e5',
       paddingTop:Platform.OS === 'android'?25:25,
       paddingLeft:40,
       paddingRight:40,
       paddingBottom:40,
       width:'100%',
       height:250
    },

    topBar:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between'

    },
    title:{
        fontFamily:'Archivo_700Bold',
        color:'white',
        lineHeight:32,
        fontSize:24,
        lineHeight:32,
        maxWidth:160,
        marginVertical:40
    }


})

export default styles
