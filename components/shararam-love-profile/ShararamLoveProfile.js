import React from 'react';
import {Image, StyleSheet, Text, View} from "react-native";
import CustomButton from "../button/CustomButton";

const ShararamLoveProfile = () => {
    return (
        <View style={styles.mainContainer}>
            <View style={styles.container}>
                <Text style={styles.name}>Niusha</Text>
                <Image
                    style={styles.image}
                    source={{
                        uri: 'https://www.clipartmax.com/png/middle/145-1459177_смешарики-картинки-нюша-смешарики-нюша.png'
                    }}/>

                <Text style={styles.bio}><Text style={{fontWeight: 'bold'}}>Bio:</Text>Enjoy travelling and listening to music</Text>
            </View>

            <View style={styles.buttonWrapper}>
                <CustomButton title=':)'/>
                <CustomButton title=':('/>
            </View>
        </View>
    );
};

export default ShararamLoveProfile;

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        borderWidth: 1,
        borderColor: '#000'
    },
    container: {
        flex: 1,
        width: '100%',
        alignItems: "center"
    },
    name: {
        fontWeight: "bold",
        fontSize: 25,
        marginBottom: 15
    },
    image: {
        width: '100%',
        height: '50%',
        marginBottom: 20
    },
    bio: {
        fontSize: 20
    },
    buttonWrapper: {
        paddingHorizontal: 15,
        flexDirection: "row",
        justifyContent: "space-between"
    }
})