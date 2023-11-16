import {
    StyleSheet,
} from 'react-native';
import LoginScreen from "./screens/login/LoginScreen";
import {NavigationContainer} from "@react-navigation/native";
import WelcomeScreen from "./screens/welcome/WelcomeScreen";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import YourShararamScreen from "./screens/your-shararam/YourShararamScreen";
import BioScreen from "./screens/bio/BioScreen";
import LoveListScreen from "./screens/love-list/LoveListScreen";

const Stack = createNativeStackNavigator();
export default function App() {

  return (
      <>
          <NavigationContainer>
              <Stack.Navigator initialRouteName="Login">
                  <Stack.Screen name="Login" component={LoginScreen} options={{
                      headerShown: false
                  }}/>
                  <Stack.Screen name="Welcome" component={WelcomeScreen} options={{
                      headerShown: false
                  }}/>
                  <Stack.Screen name="Shararam" component={YourShararamScreen} options={{
                      headerShown: false
                  }}/>
                  <Stack.Screen name="Bio" component={BioScreen} options={{
                      headerShown: false
                  }}/>
                  <Stack.Screen name="LoveList" component={LoveListScreen} options={{
                      headerShown: false
                  }}/>
              </Stack.Navigator>
          </NavigationContainer>
      </>
  );
}

