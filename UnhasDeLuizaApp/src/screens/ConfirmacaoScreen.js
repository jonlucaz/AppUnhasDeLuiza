// ConfirmacaoScreen.js
import React from 'react';
import { View, Text } from 'react-native';

const ConfirmacaoScreen = ({ route }) => {
  const { servico, profissional, horario } = route.params;

  return (
    <View>
      <Text>Confirmação de Agendamento</Text>
      <Text>Serviço: {servico}</Text>
      <Text>Profissional: {profissional}</Text>
      <Text>Horário: {horario}</Text>
    </View>
  );
};



export default ConfirmacaoScreen;