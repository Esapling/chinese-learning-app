import { StyleSheet, Text, View, Button, Pressable } from 'react-native'
import React , {useState } from 'react'
import WordCardComponent from '@/components/WordCardComponent'
import HeaderText from '@/components/HeaderText'
import CustomButton from '@/components/CustomButton'


export default function TestVocabScreen() {
  const [visibility, setVisibility] = useState(false);

  const toggleVisibility = () => {
    console.log("Visibility", visibility);
    setVisibility(!visibility);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Test Your Vocab</Text>
      <WordCardComponent toggleVisibility={visibility}/>
      <View style={styles.buttons}>
      {/* <Pressable
          onPress={() => console.log()}
          style={({ pressed }) => [
            styles.button,
            pressed && styles.button_pressed
          ]}
        >
          <Text style={styles.buttonText}>Don't know</Text>
        </Pressable> */}
  <CustomButton
          title="Don't know"
          onPress={() => console.log()}
        /> 
        <CustomButton
        title="I know"
        onPress={() => console.log()}
      />
        {/*  */}
        {/* <Pressable
          onPress={() => console.log()}
          style={({ pressed }) => [
            styles.button,
            pressed && styles.button_pressed
          ]}
        >
          <Text style={styles.buttonText}>I know</Text>
        </Pressable> */}
      </View>
      <View style={styles.toggleVisiblityButton}>
        <CustomButton
          title={visibility ? "See Meaning" : "Hide Meaning"}
          onPress={toggleVisibility}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "turquoise",
  },
  header: {
    fontSize: 30,
    fontWeight: "bold",
    color: "yellow",
    marginTop: 20,
    marginBottom: 30
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    width: "90%",
    height: 90,
    color: "black",
  },
  button: {
    alignItems: 'center',
    borderRadius: 42,
    padding: 18,
    backgroundColor:'rgba(24, 7, 45, 0.24)',
    shadowColor: 'rgba(57, 31, 91, 0.24)',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.8,
    shadowRadius: 3,
    elevation: 3, // for Android shadow
    fontFamily: 'Quicksand',
    fontSize: 18,
    letterSpacing: 0.04,
    color: '#FFFFFF',
    textAlign: 'center',
    width: '40%',
    
  },
  button_pressed: {
    // pressed state styles
    opacity: 0.67,
    backgroundColor: '#cccccc',
  },
  buttonText: {
    fontSize: 15,
    color: "black",
    textAlign: 'center',
    fontWeight: "bold",
  }
})

  