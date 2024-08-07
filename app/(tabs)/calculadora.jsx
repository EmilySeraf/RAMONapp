// import React, { useState } from "react";
// import {Alert, Button, Text, View} from 'react-native';
// import { TextInput } from "react-native-gesture-handler";

// const style = function(){
//     return ({
//         container: {
//             flex: 1,
//             justifycontent: 'center',
//             alingitems: 'center',
//         },
//         input:{
//             height: 40,
//             margin: 12,
//             borderWidth: 1,
//             padding: 10,
//         }
//     })
// }

// const Calculadora = function(){
//     const[number1, onChangeNumber1] = useState('');
//     const[number2, onChangeNumber2] = useState('');
//     const[resultado, onChangeResultado] = useState('');

//     const soma = function(){
//         onChangeResultado = number1+number2
//     }
//     console.log(resultado)
// }

// return <View style={style().container}>
//         <Text>Calculadora</Text>


//         <TextInput
//         onChangeText={onChangeNumber2}
//         value={number2}
//         placeholder="insira o segundo numero"
//         keyboardType="numeric"
//         style={style().input}
//     />
//     <Button
//     title="+"
//     onPress={() => Alert.alert('teste')}
//     />
//     <Text>Resultado: `${}`</Text>

//    </View>

// export default Calculadora;
