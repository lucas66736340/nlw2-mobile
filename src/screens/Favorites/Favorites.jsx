import React from 'react'
import {View,ScrollView} from 'react-native'

import styles from '../Favorites/FavoristesStyle'
import Header from '../../components/Header/Header'
import TeacherItem from '../../components/TeacherItem/TeacherItem'



function Favorites(){
    return(
        <View style={styles.container}>
             <Header title="Meus Porffys Favoritos" />
             <ScrollView
             style={{marginTop:-60}}
            contentContainerStyle={{paddingHorizontal:16,paddingBottom:24}}
             >
                <TeacherItem />
                <TeacherItem />
                <TeacherItem />
                <TeacherItem />
            </ScrollView>
        </View>
    )
}

export default Favorites