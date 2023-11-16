import {
    SafeAreaView,
    StyleSheet,
    TextInput,
    View,
} from 'react-native';
import {useState} from "react";
import CustomButton from "../../components/button/CustomButton";


const LoginScreen = ({navigation}) => {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');

    function pressedButton() {
        navigation.replace('Welcome')
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.formContainer}>
                <TextInput
                    style={styles.input}
                    placeholder="Login"
                    autoCapitalize="none"
                    autoComplete="off"
                    autoCorrect={false}
                    onChangeText={setLogin}
                    value={login}
                    keyboardType="email-address"
                />
                <TextInput
                    style={styles.input}
                    placeholder="Password"
                    secureTextEntry={true}
                    autoCorrect={false}
                    autoCapitalize="none"
                    autoComplete="off"
                    value={password}
                    onChangeText={setPassword}
                />
                <CustomButton
                    title='Login'
                    customStyles={styles.btn}
                    press={pressedButton}
                />
            </View>
        </SafeAreaView>
    );
};

export default LoginScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#e5e4e2'
    },
    formContainer: {
        flex: 1,
        width: '100%',
        justifyContent: 'center',
        paddingHorizontal: 50
    },
    input: {
        height: 40,
        padding: 5,
        paddingLeft: 10,
        borderColor: '#000',
        borderWidth: 1,
        marginBottom: 8,
        color: '#8d8d8d'
    },
    btn: {
        marginTop: 15
    }
});