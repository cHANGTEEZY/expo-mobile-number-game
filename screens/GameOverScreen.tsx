import PrimaryButton from "@/components/ui/Buttons/PrimaryButton";
import Title from "@/components/ui/Title";
import { Colors } from "@/constants/Colors";
import { Image, StyleSheet, Text, View } from "react-native";

interface Props {
  roundsNumber: number;
  userNumber: number;
  onStartNewGame: () => void;
}

const GameOverScreen = ({
  roundsNumber,
  userNumber,
  onStartNewGame,
}: Props) => {
  return (
    <View style={styles.rootContainer}>
      <Title>Game Over</Title>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require("../assets/images/success.png")}
        />
      </View>
      <Text style={styles.summaryText}>
        Your phone needed <Text style={styles.highlight}>{roundsNumber}</Text>{" "}
        rounds to guess the number{" "}
        <Text style={styles.highlight}>{userNumber}</Text>.
      </Text>
      <PrimaryButton color={Colors.accent500} onPress={onStartNewGame}>
        Start New Game
      </PrimaryButton>
    </View>
  );
};

export default GameOverScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    padding: 24,
    alignItems: "center",
    justifyContent: "center",
  },

  imageContainer: {
    overflow: "hidden",
    borderRadius: 200,
    borderWidth: 10,
    width: 300,
    height: 300,
    borderColor: Colors.primary800,
    margin: 36,
  },

  image: {
    height: "100%",
    width: "100%",
  },

  summaryText: {
    fontFamily: "open-sans",
    fontSize: 24,
    color: "white",
    textAlign: "center",
    marginBottom: 24,
  },

  highlight: {
    fontFamily: "open-sans-bold",
    color: Colors.accent500,
  },
});
