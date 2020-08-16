import {StyleSheet} from 'react-native'


const styles = StyleSheet.create({
 
    container:{
        flex:1,
       backgroundColor:'#8257e5',
       justifyContent:"center",
        padding:40,
        
    },
    imgLanding:{
        width:'100%',
        resizeMode:'contain',
        bottom:30
        
    },
    title:{
        fontFamily:'Poppins_400Regular',
        color:'#fff',
        fontSize:20,
        lineHeight:30,
        marginTop:20,
        marginLeft:'10%'

    },
    titleBold:{
        fontFamily:'Poppins_600SemiBold',
    },
    buttonsContainer:{
        flexDirection:'row',
        marginTop:40,
        justifyContent:'space-between',
        alignItems:'center'
        

    },
    button:{
        width:'44%',
        height:100,
        borderRadius:8,
        padding:24,
        justifyContent:'space-between',
        alignItems:'center',
        justifyContent:'center',
        marginHorizontal:10
    },

    buttonPrimary:{
        backgroundColor:'#9871f5'
    },
    
    buttonSecundary:{
        backgroundColor:'#04d361'
        
    },

    buttonText:{
        fontFamily:'Archivo_700Bold',
        color:'white',
        fontSize:16
    },
    
    totalConnections:{
        marginHorizontal:10,
        marginTop:20,
        fontFamily:'Poppins_400Regular',
        color:'#d4c2ff',
        lineHeight:22,
        fontSize:15,
    
    },
    givClassesIcon:{
        marginBottom:6,
        top:3
    }
    

})

export default styles