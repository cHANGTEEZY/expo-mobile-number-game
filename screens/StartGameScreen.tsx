import PrimaryButton from "@/components/Buttons/PrimaryButton";
import { StyleSheet, TextInput, View } from "react-native";

const StartGameScreen = () => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.numberInput}
        placeholderTextColor={"white"}
        maxLength={2}
        keyboardType="numeric"
      />
      <PrimaryButton color="white">Reset</PrimaryButton>
      <PrimaryButton color="orange">Confirm</PrimaryButton>
    </View>
  );
};

export default StartGameScreen;

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // justifyContent: "center",
    // alignItems: "center",
    padding: 16,
    marginTop: 100,
    marginHorizontal: 24,
    backgroundColor: "#72063c",
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

  numberInput: {
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
