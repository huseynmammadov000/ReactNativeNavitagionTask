import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from '@screens/login/Login';
const Stack = createNativeStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{
          headerStyle: {
            backgroundColor: 'skyblue',
          },
          headerTitleStyle:{
            color:'white'
          }
        }}
        name="Login"
        component={Login}
      />
      {/* <Stack.Screen name='Register' component={Register}/> */}
    </Stack.Navigator>
  );
};

export default AuthStack;
