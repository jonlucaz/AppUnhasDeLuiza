import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AgendamentoScreen from './screens/AgendamentoScreen';
import ConfirmacaoScreen from './screens/ConfirmacaoScreen';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Agendamento" component={AgendamentoScreen} />
        <Stack.Screen name="Confirmação" component={ConfirmacaoScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;