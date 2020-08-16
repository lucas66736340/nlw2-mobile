import React from 'react'
import {useNavigation} from '@react-navigation/native'
import {BorderlessButton} from 'react-native-gesture-handler'
import {View,Image,Text, Platform} from 'react-native'
import styles from '../../components/Header/HeaderStyle'

import backIcon from '../../assets/icons/back.png'
import logoImg from '../../assets/images/logo.png'

function Header({title}){
    const {navigate} = useNavigation()
    function handleGoBack(){
        navigate('Landing')
    }

    return(
        <View style={styles.container}>
            <View style={styles.topBar}>
                <BorderlessButton onPress={handleGoBack}>
                    <Image source={backIcon} resizeMode="contain"/>
                </BorderlessButton>
                    <Image source={logoImg} resizeMode="contain"/>
            </View>
            <Text style={styles.title}>{title} {'\n'} </Text>
        </View>
    )
}

export default Header 