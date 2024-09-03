import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import Board from './src/componets/Board';
import ScoreBoard from './src/componets/ScoreBoard';


const App = () => {
  const [playerOne, setPlayerOne] = useState('');
  const [playerTwo, setPlayerTwo] = useState('');
  const [gameStarted, setGameStarted] = useState(false);
  const [score, setScore] = useState({ X: 0, O: 0 });
  const [resetToggle, setResetToggle] = useState(false); 

  const startGame = () => {
    if (playerOne && playerTwo) {
      setGameStarted(true);
    } else {
      alert('Please enter both player names!');
    }
  };

  const resetGame = () => {
    setResetToggle(!resetToggle);  
  };

  const resetScoreAndGame = () => {
    setResetToggle(!resetToggle);
    setGameStarted(false);
    setPlayerOne('');
    setPlayerTwo('');
    setScore({ X: 0, O: 0 });
  };

  return (
    <View style={styles.container}>
      {!gameStarted ? (
        <View style={styles.setupContainer}>
          <Text style={styles.title}>Enter Player Names</Text>
          <TextInput
            placeholder="Player 1 Name (X)"
            style={styles.input}
            value={playerOne}
            onChangeText={setPlayerOne}
          />
          <TextInput
            placeholder="Player 2 Name (O)"
            style={styles.input}
            value={playerTwo}
            onChangeText={setPlayerTwo}
          />
          <TouchableOpacity style={styles.startButton} onPress={startGame}>
            <Text style={styles.startButtonText}>Start Game</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <>
          <Board 
            playerOne={playerOne} 
            playerTwo={playerTwo} 
            score={score} 
            setScore={setScore} 
            resetToggle={resetToggle} 
          />
          <ScoreBoard
            playerOne={playerOne}
            playerTwo={playerTwo}
            score={score}
            resetGame={resetGame}
            resetScoreAndGame={resetScoreAndGame}
          />
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  setupContainer: {
    alignItems: 'center',
  },
  title: {
    fontSize: 32,
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 20,
    width: 200,
    borderRadius: 5,
    textAlign: 'center',
  },
  startButton: {
    padding: 10,
    backgroundColor: 'green',
    borderRadius: 5,
  },
  startButtonText: {
    color: 'white',
    fontSize: 18,
  },
});

export default App;
