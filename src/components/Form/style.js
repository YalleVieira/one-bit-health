import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  formContent: {
    height: "100%",
    backgroundColor: "#FFFFFF",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    alignItems: "center",
    paddingTop: 15,
  },
  form: {
    width: "100%",
  },
  formLabel: {
    color: "#000",
    fontSize: 18,
    paddingLeft: 20,
  },
  input: {
    width: "90%",
    borderRadius: 50,
    backgroundColor: "#f6f6f6",
    height: 40,
    margin: 12,
    paddingLeft: 10,
  },
  textButtonCalculator: {
    fontSize: 20,
    color: "#ffffff",
  },
  buttonCalculator: {
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
    width: "90%",
    backgroundColor: "#B22222",
    paddingTop: 14,
    paddingBottom: 14,
    marginLeft: 12,
    margin: 30,
  },
  errorMessage: {
    fontSize: 12,
    color: "#B22222",
    paddingLeft: 20,
  },
  resultImc: {
    height: "100%",
    alignItems: "center",
  },
  resultImcItem: {
    textAlign: "center",
    fontSize: 28,
    color: "#B22222",
    fontWeight: "bold",
  },
  resultImcText: {
    fontSize: 20,
    fontWeight: "normal",
  },
});
export default styles;
