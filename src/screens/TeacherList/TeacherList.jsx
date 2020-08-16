import React from 'react'
import {View,Text} from 'react-native'
import styles from '../TeacherList/TeacherListStyle'

import Header from '../../components/Header/Header'
import TeacherItem from '../../components/TeacherItem/TeacherItem'
import { ScrollView } from 'react-native-gesture-handler'

function TeacherList(){
    return(
        <View style={styles.container}>
              <Header title="Proffys Disponiveis" />
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

export default TeacherList