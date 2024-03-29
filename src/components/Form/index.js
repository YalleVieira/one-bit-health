import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Vibration,
  Pressable,
  Keyboard,
  FlatList,
} from "react-native";
import ResultImc from "./ResultImc/";
import styles from "./style";

export default function Title() {
  const [height, setHeight] = useState(null),
    [weight, setWeight] = useState(null),
    [imc, setImc] = useState(null),
    [messageImc, setMessageImc] = useState(""),
    [textButton, setTextButton] = useState("Calcular IMC"),
    [errorMessage, setErrorMessage] = useState("");
  [imcList, setImcList] = useState([]);

  function imcCalculator() {
    let heightFormat = height.replace(",", ".");
    let weightFormat = weight.replace(",", ".");
    const calculatedImc = Number(
      (weightFormat / (heightFormat * heightFormat)).toFixed(2)
    );
    setImcList((item) => [
      ...item,
      { id: new Date().getTime(), imc: calculatedImc },
    ]);
    setImc(calculatedImc);
  }

  function verificationImc() {
    if (!imc) {
      Vibration.vibrate();
      setErrorMessage("*campo obrigatório");
    }
  }

  function validationImc() {
    if (weight && height) {
      imcCalculator();
      setHeight(null);
      setWeight(null);
      setMessageImc("Seu IMC é:");
      setTextButton("Calcular novamente");
      setErrorMessage("");
    } else {
      verificationImc();
      setImc(null);
      setTextButton("Calcular IMC");
      setMessageImc("Preencha o peso e altura");
      Vibration.vibrate();
    }
  }

  return (
    <View style={{ marginBottom: 20 }}>
      {!imc ? (
        <View>
          <Pressable onPress={Keyboard.dismiss} style={styles.formContent}>
            <View style={styles.form}>
              <Text style={styles.formLabel}>Altura</Text>
              <Text style={styles.errorMessage}>{errorMessage}</Text>
              <TextInput
                style={styles.input}
                value={height}
                onChangeText={(text) => setHeight(text)}
                placeholder="Ex. 1.75"
                keyboardType="numeric"
              />
              <Text style={styles.formLabel}>Peso</Text>
              <Text style={styles.errorMessage}>{errorMessage}</Text>

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
          </Pressable>
        </View>
      ) : (
        <View style={styles.resultImc}>
          <ResultImc resultImc={imc} messageResultImc={messageImc} />
          <TouchableOpacity
            style={styles.buttonCalculator}
            onPress={() => validationImc()}
          >
            <Text style={styles.textButtonCalculator}>{textButton}</Text>
          </TouchableOpacity>
          <FlatList
            showsVerticalScrollIndicator={false}
            style={styles.listImc}
            data={imcList.reverse()}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => {
              return (
                <Text style={styles.resultImcItem}>
                  <Text style={styles.resultImcText}>Resultado IMC = </Text>
                  {item.imc}
                </Text>
              );
            }}
          ></FlatList>
        </View>
      )}
    </View>
  );
}
