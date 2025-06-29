import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import { Platform, SafeAreaView, StyleSheet } from "react-native";

import { Colors } from "@/constants/Colors";
import GameOverScreen from "@/screens/GameOverScreen";
import GameScreen from "@/screens/GameScreen";
import StartGameScreen from "@/screens/StartGameScreen";
import AppLoading from "expo-app-loading";
import { useFonts } from "expo-font";
import { StatusBar } from "expo-status-bar";

const index = () => {
  const [userNumber, setUserNumber] = useState<number | null>(0);
  const [gameIsOver, setGameIsOver] = useState(false);
  const [guessRounds, setGuessRounds] = useState(0);

  const [fontsLoaded] = useFonts({
    "open-sans": require("../../assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("../../assets/fonts/OpenSans-Bold.ttf"),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  function gameOverHandler(numberOfRounds: number) {
    setGameIsOver(true);
    setGuessRounds(numberOfRounds);
  }

  function startNewGameHandler() {
    setUserNumber(null);
    setGameIsOver(false);
    setGuessRounds(0);
  }

  let screen = <StartGameScreen setUserNumber={setUserNumber} />;

  if (userNumber) {
    screen = (
      <GameScreen userNumber={userNumber} onGameOver={gameOverHandler} />
    );
  }

  if (gameIsOver && userNumber !== null) {
    screen = (
      <GameOverScreen
        userNumber={userNumber}
        roundsNumber={guessRounds}
        onStartNewGame={startNewGameHandler}
      />
    );
  }

  return (
    <>
      <StatusBar style="light" />
      <LinearGradient
        colors={[Colors.primary500, Colors.primary800]}
        style={styles.rootScreen}
      >
        <SafeAreaView
          style={[
            { flex: 1 },
            Platform.OS === "android"
              ? {
                  paddingTop: 55,
                }
              : "",
          ]}
        >
          {screen}
        </SafeAreaView>
      </LinearGradient>
    </>
  );
};

export default index;

const styles = StyleSheet.create({
  rootScreen: {
    backgroundColor: "#ddb53f",
    flex: 1,
  },

  backgroundImage: {
    opacity: 0.6,
  },
});
