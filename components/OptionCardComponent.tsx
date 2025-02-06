import { StyleSheet, Text, View , Button, Image} from 'react-native'
import React from 'react'
import HeaderText from './HeaderText';
type Props = {
  title: string;
  buttonText: string;
  imagePath:any;
  onPress?: () => void;
};

export default function OptionCardComponent({ title, buttonText , imagePath, onPress }: Props) {
  return (
    <View style={styles.container}>
      <HeaderText>{title}</HeaderText>          
       <Image 
        style={{width: 100, height: 100}}
        source={imagePath} />
      <Button title={buttonText} onPress={onPress} />
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-evenly",
    backgroundColor: "white",
    padding: 15,
    margin: 10,
    borderWidth: 1,
    borderColor: "white",
    borderRadius: 20,
    width:200,
    height: 250
  },
})