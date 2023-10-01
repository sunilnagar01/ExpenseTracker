import React from 'react'
import { StyleSheet } from 'react-native'
import { ActivityIndicator } from 'react-native'
import { View } from 'react-native'

export default function LoadingOverlay() {
    return (
        <View style={styles.container}>
            <ActivityIndicator size={'large'} color={'black'} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white'
    }
})