import {
    StyleSheet,
} from 'react-native';
import LoginScreen from "./screens/login/LoginScreen";
import {NavigationContainer} from "@react-navigation/native";
import WelcomeScreen from "./screens/welcome/WelcomeScreen";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import YourShararamScreen from "./screens/your-shararam/YourShararamScreen";

const Stack = createNativeStackNavigator();
export default function App() {

  return (
      <>
          <NavigationContainer>
              <Stack.Navigator initialRouteName="Login">
                  <Stack.Screen name="Login" component={LoginScreen} />
                  <Stack.Screen name="Welcome" component={WelcomeScreen} />
                  <Stack.Screen name="Shararam" component={YourShararamScreen}/>
              </Stack.Navigator>
          </NavigationContainer>
      </>
  );
}

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
