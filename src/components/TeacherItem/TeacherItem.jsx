import React from 'react'
import { View ,Text ,Image} from 'react-native'
import styles from '../../components/TeacherItem/TeacherItemStyle'
import { RectButton } from 'react-native-gesture-handler'

import heartOutlineIcon from '../../assets/icons/heart-outline.png'
import unFavoriteIcon from '../../assets/icons/unfavorite.png'
import whatsAppIcon from '../../assets/icons/whatsapp.png'


function TeacherItem(){
    return(
    <View style={styles.container}>
        <View style={styles.profile}>   
            <Image style={styles.avatar} source={{
                uri:'https://images.unsplash.com/photo-1529154691717-3306083d869e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80'
            }}/>
            <View style={styles.profileInfo}>
                <Text style={styles.name} >Lucas Santos</Text>
                <Text style={styles.subject} >Quimica</Text>
            </View>
        </View>
        <Text style={styles.bio}>Bioo</Text>
        <View style={styles.footer}>
            <Text style={styles.price}>
                Preco/hora {'  '}
                <Text style={styles.priceValue}>R$ 20,00</Text>
            </Text>
            <View style={styles.buttonsContainer}>
                <RectButton style={styles.favoriteButton} >
                    <Image source={heartOutlineIcon} />
                </RectButton>
                <RectButton style={styles.contactButton} >
                    <Image source={whatsAppIcon} />
                    <Text style={styles.contactButtonText}>Entrar em contato</Text>
                </RectButton>
            </View>
        </View>
    </View>
    )
}

export default TeacherItem