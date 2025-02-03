import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

type Props = {
  children: React.ReactNode;
};

export default function MyAppHeaderText({ children }: Props) {
  return (
    <Text style={styles.header}>
      {children}
    </Text>
  )
}

const styles = StyleSheet.create({
    header:{
      fontSize: 18,
      fontFamily: "serif",
      fontWeight: "bold",
      color: "black",
      textAlign: "center"
    }
})