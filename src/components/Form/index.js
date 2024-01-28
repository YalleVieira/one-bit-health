import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import ResultImc from "./ResultImc/";
import styles from "./style";

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
      setHeight(null);
      setWeight(null);
      setMessageImc("Seu IMC é:");
      setTextButton("Calcular novamente");
    } else {
      setImc(null);
      setTextButton("Calcular IMC");
      setMessageImc("Preencha o peso e altura");
    }
  }

  return (
    <View style={styles.formContent}>
      <View style={styles.form}>
        <Text style={styles.formLabel}>Altura</Text>
        <TextInput
          style={styles.input}
          value={height}
          onChangeText={(text) => setHeight(text)}
          placeholder="Ex. 1.75"
          keyboardType="numeric"
        />
        <Text style={styles.formLabel}>Peso</Text>
        <TextInput
          style={styles.input}
          value={weight}
          onChangeText={(text) => setWeight(text)}
          placeholder="Ex. 75.365"
          keyboardType="numeric"
        />
        <TouchableOpacity
          style={styles.buttonCalculator}
          onPress={() => validationImc()}
        >
          <Text style={styles.textButtonCalculator}>{textButton}</Text>
        </TouchableOpacity>
      </View>
      <ResultImc resultImc={imc} messageResultImc={messageImc} />
    </View>
  );
}
