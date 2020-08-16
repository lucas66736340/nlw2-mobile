import React from 'react'
import {Text,SafeAreaView,ImageBackground} from 'react-native'
import styles from './GiveClassesStyle'
import {RectButton} from 'react-native-gesture-handler'
import {useNavigation} from '@react-navigation/native'

import giveClassesBackgroundImg from '../../assets/images/give-classes-background.png'

function GiveClasses(){
    const {navigate} = useNavigation()
    function navigateToLanding(){
        navigate('Landing')
    }

    return(
        <SafeAreaView style={styles.container}>
           <ImageBackground resizeMode="contain"
            source={giveClassesBackgroundImg}
             style={styles.content}>
                <Text style={styles.title}>Quer ser um proffy</Text>
                <Text style={styles.description}>Para começar Voce tem que ir para web</Text>
           </ImageBackground>
        <RectButton onPress={navigateToLanding} style={styles.okButton}>
            <Text style={styles.okButtonText}>Tudo Bem</Text>
        </RectButton>
        </SafeAreaView>
    )
}

export default GiveClasses