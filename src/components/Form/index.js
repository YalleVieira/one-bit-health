import React, { useState } from "react";
import { View, Text, TextInput, Button } from "react-native";
import ResultImc from "./ResultImc/";

export default function Title() {
  const [height, setHeight] = useState(null),
    [weight, setWeight] = useState(null),
    [imc, setImc] = useState(null),
    [messageImc, setMessageImc] = useState("Preencha o peso e altura");
  [textButton, setTextButton] = useState("Calcular IMC");

  function imcCalculator() {
    const calculatedImc = Number((weight / (height * height)).toFixed(2));
    setImc(calculatedImc);
  }

  function validationImc() {
    if (weight && height) {
      imcCalculator();
      setHeight(0);
      setWeight(0);
      setMessageImc("Seu IMC é:");
      setTextButton("Calcular novamente");
    } else {
      setImc(0);
      setTextButton("Calcular IMC");
      setMessageImc("Preencha o peso e altura");
    }
  }

  return (
    <View>
      <View>
        <Text>Altura</Text>
        <TextInput
          value={height}
          onChangeText={(text) => setHeight(text)}
          placeholder="Ex. 1.75"
          keyboardType="numeric"
        />
        <Text>Peso</Text>
        <TextInput
          value={weight}
          onChangeText={(text) => setWeight(text)}
          placeholder="Ex. 75.365"
          keyboardType="numeric"
        />
        <Button onPress={() => validationImc()} title={textButton} />
      </View>
      <ResultImc resultImc={imc} messageResultImc={messageImc} />
    </View>
  );
}
