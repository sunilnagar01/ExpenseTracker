import { Pressable } from "react-native";
import { Text } from "react-native";
import { View } from "react-native";
import { StyleSheet } from "react-native";
import { GlobalStyles } from "../../constants/styles";

export default function Button({ children, onPress, mode, style }) {
    return (
        <View style={style}>
            <Pressable onPress={onPress} style={({ pressed }) => pressed && styles.pressed} >
                <View style={[styles.button, mode === "flat" && styles.flat]}>
                    <Text style={[styles.text, mode === "flat" && styles.flatText]}>{children}</Text>
                </View>
            </Pressable>
        </View >
    )
}

const styles = StyleSheet.create({
    button: {
        borderRadius: 16,
        paddingVertical: 8,
        paddingHorizontal: 8,
        backgroundColor: GlobalStyles.colors.success,
    },
    flat: {
        backgroundColor: 'transparent',
        borderColor: GlobalStyles.colors.error,
        borderWidth: 1
    },
    text: {
        color: 'white',
        textAlign: 'center',
    },
    flatText: {
        color: GlobalStyles.colors.error
    },
    pressed: {
        opacity: 0.75,
        // backgroundColor: GlobalStyles.colors.primary100,
        // borderRadius: 16
    }
});