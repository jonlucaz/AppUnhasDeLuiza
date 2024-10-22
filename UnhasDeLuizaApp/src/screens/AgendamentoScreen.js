import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';

const AgendamentoScreen = ({ navigation }) => {
  const [servico, setServico] = useState('');
  const [profissional, setProfissional] = useState('');
  const [horario, setHorario] = useState('');

  const confirmarAgendamento = () => {
    // Lógica para salvar o agendamento (ex: enviar para um banco de dados)
    navigation.navigate('Confirmação');
  };

  return (
    <><><View>
      {/* ... */}
      <Button title="Confirmar" onPress={confirmarAgendamento} />
    </View><Text>Escolha o serviço:</Text><Picker
      selectedValue={servico}
      onValueChange={(itemValue, itemIndex) => setServico(itemValue)}
    >
        <Picker.Item label="Corte de cabelo" value="Corte de cabelo" />
        <Picker.Item label="Pintura" value="Pintura" />
        {/* ... outros serviços ... */}
      </Picker></><Text>Escolha a data:</Text><Calendar
        onDayPress={(day) => {
          // Lógica para marcar o dia selecionado
          console.log('selected day', day);
        } } /></>
  );
};

// AgendamentoScreen.js
// ...
const confirmarAgendamento = () => {
  navigation.navigate('Confirmação', {
    servico,
    profissional,
    horario,
  });
};

export default AgendamentoScreen;