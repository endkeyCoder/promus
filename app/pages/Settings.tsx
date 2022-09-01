import React from 'react'
import {View, Text, StyleSheet} from 'react-native'

export const SettingsPage = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Settings Page</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%'
    },
    text: {
        color: '#000',
        fontSize: 15
    }
})