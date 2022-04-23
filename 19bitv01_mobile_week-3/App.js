import React, {useState} from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity, Button } from 'react-native';
import Constants from 'expo-constants';

// You can import from local files
import AssetExample from './components/AssetExample';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

export default function App() {
  
  const [height, setHeight] = useState(0)
  const [weight, setWeight] = useState(0)
  const [bmi, setBmi] = useState('')
  const [result, setResult] = useState('')

  function calculator() {
    let bmi = weight / (Math.pow(height /100, 2))
    setBmi(bmi.toFixed(0))
     if (bmi < 18.5) {
      setResult('Underweight')
    } else if (bmi > 18.5 && bmi < 25) {
      setResult('Normal Weight')
    } else if (bmi >= 25 && bmi < 32) {
      setResult('Overweight')
    } else {
      setResult('Obesity')
    }
  }
  
  return (
    <View style={styles.container}>

      <Card style={styles.card1}>
            <Text style={styles.paragraph}>
        BMI APP 
      </Text>
        <View style={styles.group}>
          <Text style={styles.font}>Weight(KG):</Text>
          <TextInput 
            placeholder="Enter your weight..."
            style={styles.input}
            keyboardType='numberic'
            onChangeText = {(value) => setWeight(value)}
          />
        </View>
        <View style={styles.group}>
          <Text style={styles.font}>Height(CM):</Text>
          <TextInput 
            placeholder="Enter your height..."
            style={styles.input}
            keyboardType='numberic'
            onChangeText = {(value) => setHeight(value)}
          />
        </View>
        
        <View style={styles.group}>
          <Text style={styles.font}>Result: {bmi}</Text>
          <Text style={styles.font}>{result}</Text>
        </View>
      <View style={{backgroundColor:'black',color:'pink'}}>
        <Button title="Calculate" onPress={calculator}/>  
      </View>
      </Card>
    </View>
  );
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'column',
    padding: 20
  },
  group: {
    marginTop: 20
  },
  button: {
    backgroundColor: 'lightblue',
    padding: 20,
    borderWidth: 1
  },
  buttonText: {
    fontSize: 30
  },
 input: {
    padding: 10,
    height: 40,
    borderWidth: 1
  },
  title: {
    fontSize: 20
  },
  center: {
    alignItems: 'center'
  }
});
