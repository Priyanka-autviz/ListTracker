import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
} from 'react-native';

export const Button = ({
    text,
    onPress,
    styling,
    textstyle
}) => (
    <View style={{alignItems:'center'}}>

    
    <TouchableOpacity
        style={[styles.container, styling]}
        onPress={onPress}>
        <Text style={[styles.title, textstyle]}> {text} </Text>
    </TouchableOpacity>
    </View>
);

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        height: 49,
        backgroundColor: '#3CDA91',
        borderRadius: 7,
        flexDirection: "row",
        width: "90%",
    },
    title: {
        fontSize: 18,
        color: '#fff',

    },
});
