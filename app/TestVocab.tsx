import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import WordCardComponent from '@/components/WordCardComponent'
import HeaderText from '@/components/HeaderText'

export default function TestVocabScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Test Your Vocab</Text>
      <WordCardComponent/>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "turquoise",  
  },
  header:{
    fontSize: 30,
    fontWeight: "bold",
    color: "yellow",
    marginTop: 20,
    marginBottom: 30
  }
})