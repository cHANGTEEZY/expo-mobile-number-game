import {
  Alert,
  FlatList,
  StyleSheet,
  useWindowDimensions,
  View,
} from "react-native";

import GuessLogItem from "@/components/game/GuessLogItem";
import NumberContainer from "@/components/game/NumberContainer";
import PrimaryButton from "@/components/ui/Buttons/PrimaryButton";
import Card from "@/components/ui/Card";
import InstructionText from "@/components/ui/InstructionText";
import Title from "@/components/ui/Title";
import { Ionicons } from "@expo/vector-icons";
import { useEffect, useState } from "react";

interface Props {
  userNumber: number;
  onGameOver: (numOfRounds: number) => void;
}

function generateRandomBetween(min: number, max: number, exclude: number) {
  const randomNumber = Math.floor(Math.random() * (max - min)) + min;

  if (randomNumber === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return randomNumber;
  }
}

let minBoundary = 1;
let maxBoundary = 100;

const GameScreen = ({ userNumber, onGameOver }: Props) => {
  const initialGuess = generateRandomBetween(1, 100, userNumber);
  const [currentGuess, setCurrentGuess] = useState<number>(initialGuess);
  const [guessRounds, setGuessRounds] = useState([initialGuess]);

  const { width, height } = useWindowDimensions();

  useEffect(() => {
    if (currentGuess === userNumber) {
      onGameOver(guessRounds.length);
    }
  }, [currentGuess, userNumber, onGameOver]);

  useEffect(() => {
    minBoundary = 1;
    maxBoundary = 100;
  }, []);

  function nextGuessHandler(direction: string) {
    if (
      (direction === "lower" && currentGuess < userNumber) ||
      (direction === "greater" && currentGuess > userNumber)
    ) {
      Alert.alert("Dont lie", "You know that this is wrong...", [
        {
          text: "Sorry",
          style: "cancel",
        },
      ]);
      return;
    }

    if (direction === "lower") {
      maxBoundary = currentGuess;
      generateRandomBetween(minBoundary, maxBoundary, currentGuess);
    } else {
      minBoundary = currentGuess + 1;
    }

    const newRandonmNumber = generateRandomBetween(
      minBoundary,
      maxBoundary,
      currentGuess
    );
    setCurrentGuess(newRandonmNumber);
    setGuessRounds((prevGuessRounds) => [newRandonmNumber, ...prevGuessRounds]);
  }

  const guessRoundsListLength = guessRounds.length;

  let content = (
    <>
      <NumberContainer>{currentGuess}</NumberContainer>

      <Card>
        <InstructionText style={styles.instructionText}>
          Higher or Lower ?
        </InstructionText>
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <PrimaryButton
              color="white"
              onPress={nextGuessHandler.bind(this, "lower")}
            >
              <Ionicons name="remove" size={24} color={"white"} />
            </PrimaryButton>
          </View>
          <View style={styles.buttonContainer}>
            <PrimaryButton
              color="white"
              onPress={nextGuessHandler.bind(this, "greater")}
            >
              <Ionicons name="add" size={24} color={"white"} />
            </PrimaryButton>
          </View>
        </View>
      </Card>
    </>
  );

  if (width > 500) {
    content = (
      <>
        <InstructionText style={styles.instructionText}>
          Higher or Lower ?
        </InstructionText>
        <View style={styles.buttonsContainerWide}>
          <View style={styles.buttonContainer}>
            <PrimaryButton
              color="white"
              onPress={nextGuessHandler.bind(this, "lower")}
            >
              <Ionicons name="remove" size={24} color={"white"} />
            </PrimaryButton>
          </View>
          <NumberContainer>{currentGuess}</NumberContainer>
          <View style={styles.buttonContainer}>
            <PrimaryButton
              color="white"
              onPress={nextGuessHandler.bind(this, "greater")}
            >
              <Ionicons name="add" size={24} color={"white"} />
            </PrimaryButton>
          </View>
        </View>
      </>
    );
  }

  return (
    <View style={styles.screen}>
      <Title>Opponent's Screen</Title>
      {content}
      <View style={styles.listContainer}>
        <FlatList
          data={guessRounds}
          renderItem={(item) => (
            <GuessLogItem
              roundNumber={guessRoundsListLength - item.index}
              guess={item.item}
            />
          )}
          keyExtractor={(item) => item.toString()}
        />
      </View>
    </View>
  );
};

export default GameScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 24,
    alignItems: "center",
  },

  instructionText: {
    marginBottom: 15,
  },

  buttonsContainer: {
    flexDirection: "row",
  },

  buttonsContainerWide: {
    flexDirection: "row",
    alignItems: "center",
  },

  buttonContainer: {
    flex: 1,
  },

  listContainer: {
    flex: 1,
    padding: 18,
  },
});
