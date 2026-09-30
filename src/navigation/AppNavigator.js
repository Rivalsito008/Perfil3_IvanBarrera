import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { colors } from '../constants/theme';
import HomeScreen from '../screens/HomeScreen';
import PlanetsScreen from '../screens/PlanetsScreen';

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="Inicio"
      screenOptions={{
        headerStyle: { backgroundColor: colors.background },
        headerTintColor: colors.text,
        headerTitleStyle: { fontWeight: '700' },
        contentStyle: { backgroundColor: colors.background },
        animation: 'slide_from_right',
      }}
    >
      <Stack.Screen name="Inicio" component={HomeScreen} options={{ title: 'Perfil 3' }} />
      <Stack.Screen
        name="Planetas"
        component={PlanetsScreen}
        options={{ title: 'Planetas de Dragon Ball' }}
      />
    </Stack.Navigator>
  );
}
