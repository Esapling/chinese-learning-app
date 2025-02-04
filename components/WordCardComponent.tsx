import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import {getWord} from '../services/word.service.js';

export default function WordCardComponent() {
  const [word, setWord] = useState("");
  const [character, setCharacter] = useState("");
  const [example, setExample] = useState("");

  useEffect(() => {
    const fetchWord = async () => {
      const result = await getWord();
      //setWord(result);
      setCharacter(result.character);
      setExample(result.example);
      setWord(result.meaning);
    };
    fetchWord();
  }, []);
  console.log("word", word);
  return (
    <View style={styles.cardBox}>
      <Text>Hi</Text>
      <Text style={styles.characterStyle}>{character}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  cardBox:{
    width: '80%',
    height: '70%',
    backgroundColor: "white",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  characterStyle:{
    fontSize: 100,
    fontWeight: 'bold',
    color: 'black'
  }
})