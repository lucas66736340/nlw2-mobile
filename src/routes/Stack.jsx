import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'

import Landing from '../screens/Landing/Landing'
import GiveClasses from '../screens/GiveClasses/GiveClasses'
import Tabs from '../routes/Tabs'

const {Navigator,Screen} = createStackNavigator()

function Stack(){
    return(
        <NavigationContainer>
            <Navigator screenOptions={{
                headerShown:false
            }}>
                <Screen name="Landing" component={Landing} />
                <Screen name="GiveClasses" component={GiveClasses} />
                <Screen name="Tabs" component={Tabs} />
            </Navigator>
        </NavigationContainer>
    )
}

export default Stack

