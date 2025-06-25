import PrimaryButton from "@/components/Buttons/PrimaryButton";
import { useState } from "react";
import { StyleSheet, TextInput, View } from "react-native";

const StartGameScreen = () => {
  const [enteredNumber, setEnteredNumber] = useState();

  const handleNumberChange = (number: any) => {
    setEnteredNumber(number);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.numberInput}
        placeholderTextColor={"white"}
        maxLength={2}
        keyboardType="numeric"
        value={enteredNumber}
        onChange={handleNumberChange}
      />
      <View style={styles.buttonsContainer}>
        <View style={styles.buttonContainer}>
          <PrimaryButton color="white">Reset</PrimaryButton>
        </View>
        <View style={styles.buttonContainer}>
          <PrimaryButton color="orange">Confirm</PrimaryButton>
        </View>
      </View>
    </View>
  );
};

export default StartGameScreen;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    marginTop: 100,
    marginHorizontal: 24,
    backgroundColor: "#4e0329",
    borderRadius: 8,
    elevation: 30,
    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 6,
    shadowOpacity: 0.4,
  },

  buttonsContainer: {
    flexDirection: "row",
  },

  buttonContainer: {
    flex: 1,
  },

  numberInput: {
    textAlign: "center",
    height: 50,
    width: 50,
    fontSize: 18,
    borderBottomWidth: 1,
    borderBottomColor: "#ddb52f",
    color: "#ddb52f",
    marginVertical: 10,
    fontWeight: "bold",
  },
});
