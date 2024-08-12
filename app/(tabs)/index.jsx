import React, { useState } from 'react';
import { Text, View, Button, TouchableOpacity, StyleSheet } from 'react-native';

const App = () => {
  const [input, setInput] = useState('');
  const [resultado, setResultado] = useState('');

  const handlePress = (value) => {
    setInput(input + value);
  };

  const clearInput = () => {
    setInput('');
    setResultado('');
  };

  const calculateResult = () => {
    try {
      setResultado(eval(input));
    } catch {
      setResultado('Error');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.visor}>{input || '0'}</Text>
      <Text style={styles.resultado}>Resultado: {resultado}</Text>
      <View style={styles.buttonRow}>
        {[1, 2, 3].map((num) => (
          <TouchableOpacity key={num} style={styles.button} onPress={() => handlePress(num.toString())}>
            <Text style={styles.buttonText}>{num}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <View style={styles.buttonRow}>
        {[4, 5, 6].map((num) => (
          <TouchableOpacity key={num} style={styles.button} onPress={() => handlePress(num.toString())}>
            <Text style={styles.buttonText}>{num}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <View style={styles.buttonRow}>
        {[7, 8, 9].map((num) => (
          <TouchableOpacity key={num} style={styles.button} onPress={() => handlePress(num.toString())}>
            <Text style={styles.buttonText}>{num}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <View style={styles.buttonRow}>
        <TouchableOpacity style={styles.button} onPress={() => handlePress('0')}>
          <Text style={styles.buttonText}>0</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => handlePress('+')}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => handlePress('-')}>
          <Text style={styles.buttonText}>-</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => handlePress('*')}>
          <Text style={styles.buttonText}>*</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => handlePress('/')}>
          <Text style={styles.buttonText}>/</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.buttonRow}>
        <TouchableOpacity style={styles.button} onPress={calculateResult}>
          <Text style={styles.buttonText}>=</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={clearInput}>
          <Text style={styles.buttonText}>C</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  visor: {
    fontSize: 30,
    marginBottom: 20,
  },
  resultado: {
    fontSize: 20,
    marginBottom: 20,
  },
  buttonRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: '80%',
    justifyContent: 'space-between',
  },
  button: {
    width: '20%',
    backgroundColor: '#ddd',
    padding: 20,
    alignItems: 'center',
    margin: 5,
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 20,
  },
});

export default App;