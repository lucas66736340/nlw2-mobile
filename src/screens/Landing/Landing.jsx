import React from 'react'

import {View,Text,Image, SafeAreaView,TouchableOpacity} from 'react-native'
import styles from './LandingStyle'
import {RectButton} from 'react-native-gesture-handler'
import landingImg from '../../assets/images/landing.png'
import studyIcon from '../../assets/icons/study.png'
import givClassesIcon from '../../assets/icons/give-classes.png'
import heartIcon from '../../assets/icons/heart.png'

function Landing({navigation}){
    return(
        <SafeAreaView style={styles.container}>
            <Image style={styles.imgLanding} source={landingImg}/>
           <Text style={styles.title}>
               {/* quebra de linha no react native */}
               Seja bem vindo, {'\n'} 
               <Text style={styles.titleBold}>O que deseja fazer</Text>
           </Text>

           <View style={styles.buttonsContainer}>
                <RectButton 
                onPress={()=>{
                    navigation.navigate('Tabs')
                }}
                style={[styles.button,styles.buttonPrimary]}>
                    <Image source={studyIcon}/>
                    <Text style={styles.buttonText} >Estudar</Text>
                </RectButton>
                <RectButton onPress={()=>{
                    navigation.navigate('GiveClasses')
                }} style={[styles.button,styles.buttonSecundary]}>
                    <Image style={styles.givClassesIcon} source={givClassesIcon}/>
                    <Text style={styles.buttonText} >Dar aulas</Text>
                </RectButton>
           </View>
            <Text style={styles.totalConnections}>
                Total de 285 conexaoes {' '}
                <Image  style={styles.heartIcon} source={heartIcon}/>
             </Text>
        </SafeAreaView>
    )
}

export default Landing