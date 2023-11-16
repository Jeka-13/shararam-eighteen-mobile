import React from 'react';
import {View, Text, SafeAreaView, StyleSheet} from "react-native";
import CustomButton from "../../components/button/CustomButton";

const WelcomeScreen = ({navigation}) => {
    function onPress() {
        navigation.replace('Shararam')
    }
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.container}>
                <Text style={styles.text}>Welcome to Shararam eighteen. Our product uses concept of 'avatar'. Your will create your
                    'avatar' and will upload a photo. Only you decide when to show your real photo.</Text>
                <CustomButton title='Sounds perfect!' press={onPress}/>
            </View>
        </SafeAreaView>
    );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: 15
    },
    text: {
      fontSize: 15,
      marginBottom: 30,
        fontWeight: "bold"
    }
})