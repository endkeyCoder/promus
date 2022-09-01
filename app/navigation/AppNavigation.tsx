import React from 'react'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import { HomePage } from '../pages/Home'
import { SettingsPage } from '../pages/Settings'

const Tab = createBottomTabNavigator()

export const AppNavigation = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name='Home' component={HomePage}/>
            <Tab.Screen name='Settings' component={SettingsPage}/>
        </Tab.Navigator>
    )
}