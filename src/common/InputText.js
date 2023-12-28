import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'

const InputText = ({
    placeholder,
    placeholderTextColor,
    secureTextEntry,
    inputstying,
    onChangeText,
    keyboardType,
    value,
    onChange,
    editable,
    defaultValue
}) => {
    return (
        <View
            style={[styles.input, inputstying]}>
            <TextInput
                style={styles.view}
                placeholder={placeholder}
                placeholderTextColor={placeholderTextColor}
                secureTextEntry={secureTextEntry}
                onChangeText={onChangeText}
                autoCapitalize={"none"}
                keyboardType={keyboardType}
                value={value}
                onChange={onChange}
                editable={editable}
                defaultValue={defaultValue}
            />
        </View>
    )
}

export default InputText

const styles = StyleSheet.create({
    input: {
        width: "100%",
        height: 48,
        borderWidth: 1,
        borderColor: '#F1EDED',
        marginTop: 20,
        backgroundColor: '#fff',
        borderRadius: 6,
        flexDirection: "row",
        paddingHorizontal: 10,
        alignItems: "center",
        justifyContent: "center",
    },
    view: {
        flex: 1, fontSize: 16,
        color: 'gray',

    }
})