import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { RegisterNavigation } from './RegisterNavigation'
import { AppNavigation } from './AppNavigation'

export const RootNavigation = () => {
    return (
        <NavigationContainer>
            <AppNavigation />
        </NavigationContainer>
    )
}