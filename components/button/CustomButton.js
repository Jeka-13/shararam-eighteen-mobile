import {Pressable, View, Text, StyleSheet} from "react-native";


const CustomButton = ({title, press, customStyles = {}}) => {
    return (
        <View style={[styles.container, customStyles]}>
            <Pressable style={styles.pressable} onPress={press}>
                <Text style={styles.textBtn}>{title}</Text>
            </Pressable>
        </View>
    );
};

export default CustomButton;

const styles = StyleSheet.create({
    container: {
        borderWidth: 1,
        borderColor: 'black'
    },
    pressable: {
        padding: 8,
        alignItems: "center"
    },
    textBtn: {
        color: 'blue'
    }
})