import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from "react-native";
import ShararamPicker from "../../components/shararam-picker/ShararamPicker";

const YourShararamScreen = ({navigation}) => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.viewContainer}>
                <Text style={styles.text}>Chose your shararam:</Text>
                <View style={styles.shararamPickerContainer}>
                    <ShararamPicker navigation={navigation} imagePath='https://www.clipartmax.com/png/middle/87-874440_hebergeur-dimage-смешарики-клипарт.png'/>
                    <ShararamPicker navigation={navigation} imagePath='https://www.clipartmax.com/png/middle/145-1459177_смешарики-картинки-нюша-смешарики-нюша.png'/>
                </View>
            </View>
        </SafeAreaView>

    );
};

export default YourShararamScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    viewContainer: {
        flex: 1,
        marginTop: '20%',
        paddingHorizontal: 20
    },
    text: {
        textAlign: "center",
        fontWeight: "bold",
        fontSize: 30,
        marginBottom: '30%'
    },
    shararamPickerContainer: {
        flexDirection: "row",
        justifyContent: "space-between"
    }
})