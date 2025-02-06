import { Text, View , FlatList, StyleSheet} from "react-native";

import OptionCardComponent from "@/components/OptionCardComponent";
import { useNavigation } from "@react-navigation/native";
import { getFunctionalities } from "@/utils/functionalities";


export default function HomeScreen() {
  const navigation = useNavigation();

  const functionalities = getFunctionalities();
  return (
    <View style={styles.container}>
      <FlatList 
        data={functionalities}
        renderItem={({item} )=>
           <OptionCardComponent title={item.title} buttonText={item.buttonText} 
            imagePath={item.image}
        onPress={() => navigation.navigate(item.navigation)}
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