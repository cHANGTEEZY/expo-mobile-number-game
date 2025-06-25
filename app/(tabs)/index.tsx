import StartGameScreen from "@/screens/StartGameScreen";
import { StyleSheet, View } from "react-native";

const index = () => {
  return (
    <View style={styles.rootScreen}>
      <StartGameScreen />;
    </View>
  );
};

export default index;

const styles = StyleSheet.create({
  rootScreen: {
    backgroundColor: "#ddb53f",
    flex: 1,
  },
});
