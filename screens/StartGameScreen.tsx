import PrimaryButton from "@/components/ui/Buttons/PrimaryButton";
import Card from "@/components/ui/Card";
import InstructionText from "@/components/ui/InstructionText";
import Title from "@/components/ui/Title";
import { Colors } from "@/constants/Colors";
import { useState } from "react";
import {
  Alert,
  KeyboardAvoidingView,
  ScrollView,
  StyleSheet,
  TextInput,
  useWindowDimensions,
  View,
} from "react-native";

interface Props {
  setUserNumber: (number: number) => void;
}

const StartGameScreen = ({ setUserNumber }: Props) => {
  const [enteredNumber, setEnteredNumber] = useState<string>("");

  const { width, height } = useWindowDimensions();

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

    setUserNumber(chosenNumber);
  };

  const marginTopDistance = height < 450 ? 30 : 100;

  return (
    <ScrollView>
      <KeyboardAvoidingView style={styles.screen} behavior="position">
        <View style={[styles.rootContainer, { marginTop: marginTopDistance }]}>
          <Title>Guess my number</Title>
          <Card>
            <InstructionText>Enter a number</InstructionText>
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
          </Card>
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
  );
};

export default StartGameScreen;

const styles = StyleSheet.create({
  screen: {},

  rootContainer: {
    flex: 1,
    alignItems: "center",
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
    borderBottomColor: Colors.accent500,
    color: Colors.accent500,
    marginVertical: 10,
    fontWeight: "bold",
  },
});
