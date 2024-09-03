import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';


const ScoreBoard = ({ playerOne, playerTwo, score, resetGame, resetScoreAndGame }) => {
  return (
    <View style={styles.container}>
      <View style={styles.scoreContainer}>
        <Text style={styles.playerText}>
          {playerOne} (X): {score.X}
        </Text>
        <Text style={styles.playerText}>
          {playerTwo} (O): {score.O}
        </Text>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={resetGame}>
          <Text style={styles.buttonText}>Reset Game</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={resetScoreAndGame}>
          <Text style={styles.buttonText}>Reset All</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    alignItems: 'center',
  },
  scoreContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 300,
    marginBottom: 20,
  },
  playerText: {
    fontSize: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: 300,
  },
  button: {
    padding: 10,
    backgroundColor: 'blue',
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
  },
});

export default ScoreBoard;
