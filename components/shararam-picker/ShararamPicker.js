import React, {useState} from 'react';
import {Image, Pressable, StyleSheet, Text, View} from "react-native";

const ShararamPicker = ({imagePath, navigation}) => {
    function choseShararam() {
        navigation.replace('Bio')
    }
    return (
        <>
        <View style={styles.mainContainer}>
            <Pressable onPress={choseShararam}>
                <Image style={styles.imageContainer} source={{uri: imagePath}}/>
            </Pressable>
        </View>
        </>
    );
};

export default ShararamPicker;

const styles = StyleSheet.create({
    mainContainer: {
      borderWidth: 3,
      borderColor: '#8d8d8d'
    },
    imageContainer: {
        width: 150,
        height: 150,
        overflow: "hidden"
    }
})