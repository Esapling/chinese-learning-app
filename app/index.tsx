import { Text, View , FlatList, StyleSheet} from "react-native";

import OptionCardComponent from "@/components/OptionCardComponent";
import { useNavigation } from "@react-navigation/native";



export default function HomeScreen() {
  const navigation = useNavigation();

  const functionalities = [
    {
      id: "1",
      title: "Test Your Vocabulary",
      buttonText: "Start",
      navigation: "TestVocabScreen"
    },
    {
      id: "2",
      title: "Draw Characters",
      buttonText: "Start",
      navigation: "TestVocabScreen"
    },
    {
      id: "3",
      title: "Test Your Pronunciation",
      buttonText: "Start",
      navigation: "TestVocabScreen"
  
    },
    {
      id: "4",
      title: "Read Stories",
      buttonText: "Start",
      navigation: "TestVocabScreen"
    },
    {
      id: "5",
      title: "Your Profile",
      buttonText: "Start",
      navigation: "TestVocabScreen"
    },
    {
      id: "6",
      title: "Settings",
      buttonText: "Start",
      navigation: "TestVocabScreen"
  
    },
  
  ]
  
  return (
    <View style={styles.container}>
      <FlatList 
        data={functionalities}
        renderItem={({item} )=>
           <OptionCardComponent title={item.title} buttonText={item.buttonText} onPress={() => navigation.navigate(item.navigation)}
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