import {StyleSheet,Platform} from 'react-native'


const styles = StyleSheet.create({
 
    container:{
       backgroundColor:'#8257e5',
       flex:1,
       backgroundColor:'#8257e5',
       paddingTop:Platform.OS === 'android'?25:0,
       paddingLeft:40,
       paddingRight:40,
       paddingBottom:40
     
    },

    //imagem de fundo ela permite conteudo dentro dela
    content:{ 
        flex:1,
        justifyContent:'center',
        padding:Platform.OS === 'ios'?40:0
    },
    title:{
        fontFamily:'Archivo_700Bold',
        color:'white',
        fontSize:32,
        lineHeight:37,
        maxWidth:180,

        
    },
    description:{
        marginTop:24,
        color:'#d4c2ff',
        fontSize:16,
        lineHeight:26,
        fontFamily:'Poppins_400Regular',
        maxWidth:240
    }
    ,
    okButton:{
        marginVertical:40,
        backgroundColor:'#04d361',
        height:58,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:8,
        marginHorizontal:Platform.OS === 'ios'?15:0
    },
    okButtonText:{
        color:'white',
        fontSize:16,
        fontFamily:'Archivo_700Bold'
    }

   
    

})

export default styles
