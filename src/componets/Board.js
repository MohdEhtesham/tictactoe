import React, { useState, useEffect } from 'react';
import { View, StyleSheet, TouchableOpacity, Text, Alert } from 'react-native';
import calculateWinner from '../utils/calculationWinner';

const Board = ({ playerOne, playerTwo, score, setScore, resetToggle }) => {
    const [board, setBoard] = useState(Array(9).fill(null));
    const [isXNext, setIsXNext] = useState(true);
    const [winner, setWinner] = useState(null);

    useEffect(() => {
        resetBoard();  
    }, [resetToggle]);

    const handlePress = (index) => {
        if (board[index] || winner) return;

        const newBoard = [...board];
        newBoard[index] = isXNext ? 'X' : 'O';
        setBoard(newBoard);
        setIsXNext(!isXNext);

        const winner = calculateWinner(newBoard);
        if (winner) {
            setWinner(winner);
            setScore({ ...score, [winner]: score[winner] + 1 });
            showAlert(winner);
        } else if (newBoard.every((cell) => cell)) {
            setWinner('Draw');
            showAlert('Draw');
        }
    };

    const showAlert = (result) => {
        Alert.alert(
            result === 'Draw' ? "It's a Draw!" : `${result === 'X' ? playerOne : playerTwo} Wins!`,
            '',
            [
                { text: 'Reset Game', onPress: () => resetBoard() },
                { text: 'Reset All', onPress: () => resetAll() },
            ],
            { cancelable: false }
        );
    };

    const resetBoard = () => {
        setBoard(Array(9).fill(null));
        setIsXNext(true);
        setWinner(null);
    };

    const resetAll = () => {
        resetBoard();
        setScore({ X: 0, O: 0 });
    };

    return (
        <View style={styles.board}>
            {board.map((cell, index) => (
                <TouchableOpacity key={index} style={styles.cell} onPress={() => handlePress(index)}>
                    <Text style={styles.cellText}>{cell}</Text>
                </TouchableOpacity>
            ))}
        </View>
    );
};

const styles = StyleSheet.create({
    board: {
        width: 300,
        height: 300,
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    cell: {
        width: '33.33%',
        height: '33.33%',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
    },
    cellText: {
        fontSize: 40,
    },
});

export default Board;
