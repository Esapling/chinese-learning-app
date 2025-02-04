import { Platform } from 'react-native';

// needs update to work with the backend
const URL = Platform.select({
    android: 'http://10.0.2.2:3000',
    ios: 'http://localhost:3000',
  });
  


export const getWord = async () => {
    try{
    const response = await fetch(`${URL}/words/word`, 
    {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
        credentials: 'include'
    });
    const data = await response.json();
    console.log("Your response: ", response);
    return data.data;
}catch(e){
    console.log(e);
    return null
}
};