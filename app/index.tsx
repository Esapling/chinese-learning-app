import { Text, View , FlatList, StyleSheet} from "react-native";

import OptionCardComponent from "@/components/OptionCardComponent";


const functionalities = [
  {
    id: "1",
    title: "Test Your Vocabulary",
    buttonText: "Start"
  },
  {
    id: "2",
    title: "Draw Characters",
    buttonText: "Start"

  },
  {
    id: "3",
    title: "Test Your Pronunciation",
    buttonText: "Start"

  },
  {
    id: "4",
    title: "Read Stories",
    buttonText: "Start"
  },
  {
    id: "5",
    title: "Your Profile",
    buttonText: "Start"
  },
  {
    id: "6",
    title: "Settings",
    buttonText: "Start"

  },

]

export default function Index() {
  return (
    <View style={styles.container}>
      <FlatList 
        data={functionalities}
        renderItem={({item} )=>
           <OptionCardComponent title={item.title} buttonText={item.buttonText}
           />}
        keyExtractor={(item) => item.id}
        numColumns={2}
        />
    </View>
    );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "flex-start",
    backgroundColor: "turquoise"
  }
});