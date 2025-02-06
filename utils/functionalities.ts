export interface Functionalities{
    id: string;
    title: string;
    buttonText: string;
    navigation: string;
    image: any;
};

export function getFunctionalities(): Functionalities[]{
    return [
        {
          id: "1",
          title: "Test Your Vocabulary",
          buttonText: "Start",
          navigation: "TestVocabScreen",
          image: require("../assets/images/peace_pixably.png")
        },
        {
          id: "2",
          title: "Draw Characters",
          buttonText: "Start",
          navigation: "TestVocabScreen",
          image: require("../assets/images/peace_pixably.png")
        },
        {
          id: "3",
          title: "Test Your Pronunciation",
          buttonText: "Start",
          navigation: "TestVocabScreen",
          image: require("../assets/images/peace_pixably.png")
    
        },
        {
          id: "4",
          title: "Read Stories",
          buttonText: "Start",
          navigation: "TestVocabScreen",
          image: require("../assets/images/peace_pixably.png")
        },
        {
          id: "5",
          title: "Your Profile",
          buttonText: "Start",
          navigation: "TestVocabScreen",
          image: require("../assets/images/peace_pixably.png")
        },
        {
          id: "6",
          title: "Settings",
          buttonText: "Start",
          navigation: "TestVocabScreen",
          image: require("../assets/images/peace_pixably.png")
      
        },
      
      ]
    
}