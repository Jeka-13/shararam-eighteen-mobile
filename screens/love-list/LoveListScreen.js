import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from "react-native";
import ShararamLoveProfile from "../../components/shararam-love-profile/ShararamLoveProfile";

const LoveListScreen = () => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.container}>
                <Text style={styles.text}>Look, what I have found for you:</Text>
                <View style={styles.profileWrapper}>
                    <ShararamLoveProfile/>
                </View>
            </View>
        </SafeAreaView>
    );
};

export default LoveListScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 15,
        marginTop: '10%'
    },
    text: {
        fontSize: 21,
      textAlign: "center",
        marginBottom: 30,
    },
    profileWrapper: {
        height: '70%'
    }
})