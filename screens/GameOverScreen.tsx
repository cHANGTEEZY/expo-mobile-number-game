import PrimaryButton from "@/components/ui/Buttons/PrimaryButton";
import Title from "@/components/ui/Title";
import { Colors } from "@/constants/Colors";
import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
} from "react-native";

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
  const { width, height } = useWindowDimensions();

  let imageSize = 300;

  if (width < 380) {
    imageSize = 150;
  }

  if (height < 400) {
    imageSize = 80;
  }

  const imageStyle = {
    width: imageSize,
    height: imageSize,
    borderRadius: imageSize / 2,
  };

  return (
    <ScrollView style={styles.screen}>
      <View style={styles.rootContainer}>
        <Title>Game Over</Title>
        <View style={[styles.imageContainer, imageStyle]}>
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
    </ScrollView>
  );
};

export default GameOverScreen;

const deviceWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },

  rootContainer: {
    flex: 1,
    alignItems: "center",
    padding: 24,
    justifyContent: "center",
  },

  imageContainer: {
    overflow: "hidden",
    borderWidth: 10,
    borderRadius: deviceWidth < 380 ? 85 : 200,
    width: deviceWidth < 380 ? 170 : 300,
    height: deviceWidth < 380 ? 170 : 300,
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
