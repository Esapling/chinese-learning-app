import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import {getWord} from '../services/word.service.js';

type Props = {
  toggleVisibility?: boolean;
}  
export default function WordCardComponent({toggleVisibility}: Props) {
  const [word, setWord] = useState("");
  const [visibility, setViisibility] = useState(false);
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

  useEffect(() => {
    setViisibility(toggleVisibility);
  }, [toggleVisibility]);

  console.log("word", word);
  return (
    <View style={styles.cardBox}>
      <View style={styles.characterBox}>
        <Text style={styles.characterStyle}>{character}</Text>
      </View>
      {visibility ? 
      <> 
      <View style={styles.meaningContainer}>
        <Text style={styles.meaning}>{word}</Text>
      </View>
      <View style={styles.sentenceContainer}>
      <Text style={styles.sentence}>{example}</Text>
      </View>
      </>
      : null}

    </View>
  )
}

const styles = StyleSheet.create({
  cardBox:{
    width: '80%',
    height: '50%',
    backgroundColor: "white",
    borderRadius: 30,
    justifyContent: "space-around",
    alignItems: "center",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.1,
    shadowColor: '#000',
    shadowRadius: 4,
    elevation: 20,
    padding: 20,
  },
  characterBox:{
    width: '100%',
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,// Inner shadow effect
 
  },
  characterStyle:{
    fontSize: 120,
    fontWeight: 'bold',
    color: 'black'
  },
  meaningContainer:{
    borderRadius: 10,
  },
  meaning:{
    fontSize: 40,
    color: 'black',
    textAlign: 'center',
    margin: 10,
    visibility: 'hidden',
  },
  sentenceContainer:{
    borderRadius: 10,
  },
  sentence:{
    fontSize: 20,
    color: 'black',
    textAlign: 'center',
    margin: 10
  }

})