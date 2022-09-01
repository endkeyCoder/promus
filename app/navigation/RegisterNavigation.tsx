import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { HomePage } from '../pages/Home'

const RegisterStack = createNativeStackNavigator()

export const RegisterNavigation = () => {
    return (
        <RegisterStack.Navigator>
            <RegisterStack.Screen
                options={{
                    headerShown: false
                }}
                name='homePage'
                component={HomePage}
            />
        </RegisterStack.Navigator>
    )
}