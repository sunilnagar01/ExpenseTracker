import React from 'react'
import { Text } from 'react-native'
import { Pressable } from 'react-native'
import { Button } from 'react-native'
import { StyleSheet } from 'react-native'
import { ActivityIndicator } from 'react-native'
import { View } from 'react-native'

export default function ErrorOverlay({ message, onConfirm }) {
    return (
        <View style={styles.container}>
            <Text style={[styles.text, styles.title]}>An Error Occured!</Text>
            <Text style={styles.text}>{message}</Text>
            {/* <Button title='Okay' onPress={onConfirm} /> */}
            <Pressable style={({pressed}) => [styles.buttonContainer, pressed && styles.pressed]} onPress={onConfirm}>
                <Text style={styles.buttonText}>Okay</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white'
    },
    text: {
        textAlign: 'center',
        marginBottom: 8
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    buttonContainer: {
        // backgroundColor: '#280699',
        borderRadius: 20,
        // width: 50,
        paddingHorizontal: 23,
        paddingVertical: 8,
        backgroundColor: '#ddd'
    },
    pressed: {
        opacity: 0.70
    },
    buttonText: {
        color: '#280699',
        fontSize: 18
    }
})