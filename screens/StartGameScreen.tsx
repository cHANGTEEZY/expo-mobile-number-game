import PrimaryButton from "@/components/Buttons/PrimaryButton";
import { useState } from "react";
import { Alert, StyleSheet, TextInput, View } from "react-native";

const StartGameScreen = () => {
  const [enteredNumber, setEnteredNumber] = useState<string>("");

  const handleNumberChange = (enteredNumber: string) => {
    setEnteredNumber(enteredNumber);
  };

  const resetInputHandler = () => {
    setEnteredNumber("");
  };

  const confirmInputHandler = () => {
    const chosenNumber = parseInt(enteredNumber);

    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert(
        "Invalid number!",
        "Number has to be a number between 1 to 99",
        [
          {
            text: "okay",
            style: "destructive",
            onPress: resetInputHandler,
          },
        ]
      );
    }

    console.log("valid number", chosenNumber);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.numberInput}
        placeholderTextColor={"white"}
        maxLength={2}
        keyboardType="numeric"
        value={enteredNumber}
        onChangeText={handleNumberChange}
      />
      <View style={styles.buttonsContainer}>
        <View style={styles.buttonContainer}>
          <PrimaryButton color="white">Reset</PrimaryButton>
        </View>
        <View style={styles.buttonContainer}>
          <PrimaryButton color="orange" onPress={confirmInputHandler}>
            Confirm
          </PrimaryButton>
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
    backgroundColor: "#3b021f",
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
