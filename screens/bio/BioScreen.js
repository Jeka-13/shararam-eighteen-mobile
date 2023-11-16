import React, {useState} from 'react';
import {SafeAreaView, StyleSheet, Text, TextInput, View} from "react-native";
import CustomButton from "../../components/button/CustomButton";

const BioScreen = ({navigation}) => {
    const [bio, setBio] = useState('')
    function onPress() {
        navigation.replace('LoveList')
    }
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.container}>
                <Text style={styles.text}>Your bio:</Text>
                <TextInput
                    style={styles.textArea}
                    placeholder='Tell us about yourself'
                    editable
                    multiline
                    onChangeText={setBio}
                    value={bio}
                />
            </View>
            <CustomButton title='Find me love!' press={onPress}/>
        </SafeAreaView>
    );
};

export default BioScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: '20%',
        alignItems: "center"
    },
    text: {
        fontSize: 40,
        marginBottom: '15%',
        fontWeight: "bold"
    },
    textArea: {
        width: 350,
        padding: 15,
        fontSize: 17,
        height: '30%',
        borderBottomColor: '#000',
        borderBottomWidth: 1
    }
})