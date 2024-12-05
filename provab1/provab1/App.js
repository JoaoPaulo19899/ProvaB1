import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import LoginPage from './src/pages/LoginPage/indexLoginPage';
import RegistroPage from './src/pages/Registro/indexRegistro';
import SenhaPage from './src/pages/Senha/indexSenha';
import Telainicial from './src/pages/Telainicial/indextelainicial';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="LoginPage" screenOptions={{headerShown: false}}>
        <Stack.Screen name="LoginPage" component={LoginPage}/>
        <Stack.Screen name='RegistroPage' component={RegistroPage}/>
        <Stack.Screen name='SenhaPage' component={SenhaPage}/>
        <Stack.Screen name='Telainicial' component={Telainicial}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}