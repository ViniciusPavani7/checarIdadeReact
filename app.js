import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

export default function App() {
  const [idad, setIdade] = useState('');
  const [resultado, setResultado] = useState('');

  const checarIdade = () => {
    const idade = parseInt(idad);

    if (isNaN(idade)) {
      setResultado('Por favor, digite uma idade válida.');
    } else if (idade >= 0 && idade <= 12) {
      setResultado('Criança');
    } else if (idade >= 13 && idade <= 17) {
      setResultado('Adolescente');
    } else if (idade >= 18 && idade <= 20) {
      setResultado('Jovem');
    } else if (idade >= 21 && idade <= 60) {
      setResultado('Adulto');
    } else if (idade > 60) {
      setResultado('Idoso');
    } else {
      setResultado('Idade inválida.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Verificador de Faixa Etária</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite sua idade"
        onChangeText={(text) => setIdade(text)}
        value={idad}
        keyboardType="numeric"
      />
      <Button title="Verificar" onPress={checarIdade} />
      <Text style={styles.result}>{resultado}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: 200,
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  result: {
    marginTop: 20,
    fontSize: 18,
  },
});
