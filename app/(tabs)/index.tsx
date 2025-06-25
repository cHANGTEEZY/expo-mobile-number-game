import StartGameScreen from "@/screens/StartGameScreen";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import { ImageBackground, StyleSheet } from "react-native";

const index = () => {
  const [userNumber, setUserNumber] = useState<number | null>(null);

  return (
    <LinearGradient colors={["#4e0329", "#ddb52f"]} style={styles.rootScreen}>
      <ImageBackground
        source={require("../../assets/images/background.png")}
        resizeMode="cover"
        style={styles.rootScreen}
        imageStyle={styles.backgroundImge}
      >
        <StartGameScreen />;
      </ImageBackground>
    </LinearGradient>
  );
};

export default index;

const styles = StyleSheet.create({
  rootScreen: {
    backgroundColor: "#ddb53f",
    flex: 1,
  },

  backgroundImge: {
    opacity: 0.6,
  },
});
