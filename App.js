
import { SafeAreaView, StyleSheet, TextInput, View, } from 'react-native';
import WelcomeScreen from './screens/WelcomeScreen';


import AntDesign from 'react-native-vector-icons/AntDesign'
import { useEffect, useState } from 'react';
import Meal from './screens/Meal';

export default function App() {


  
  const [text, setText] = useState('')
  const [meals, setMeals] = useState([])
  const [loading, setLoading] = useState(true)
  
  const fetchData = () => {
    fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=').then(res =>res.json())
    .then(data =>setMeals(data.meals))
    .catch((error) => {console.log(error)})
    .finally(() => {setLoading(false)})

    

  }

  useEffect(() => {
    fetchData()
  })

  // const products = [
  //   {
  //     id: 1,
  //     pname: 'Super Mouse',
  //     uri: require('./assets/Mouse.jpeg')
  //   },
  //   {
  //     id: 2,
  //     pname: 'Gaming Video Card',
  //     uri: require('./assets/vedioCard.jpeg')
  //   },
  //   {
  //     id: 3,
  //     pname: 'Pan',
  //     uri: require('./assets/Pan.jpeg')
  //   },
  //   {
  //     id: 4,
  //     pname: 'Hight Quality Microphone',
  //     uri: require('./assets/Mic.jpeg')
  //   },
  //   {
  //     id: 5,
  //     pname: 'Chair ',
  //     uri: require('./assets/chair.jpg')
  //   },
  //   {
  //     id: 6,
  //     pname: 'Super Mouse',
  //     uri: require('./assets/Mouse.jpeg')
  //   }
  // ]
  if (loading){
    return(
      <WelcomeScreen />
    )
  }
  return (
    <SafeAreaView style={styles.container} >
      
      <View style={styles.inputContainer}>
        <AntDesign name='search1' style={{fontSize:20, alignSelf: 'center', color: 'black', }} />
        <TextInput style={styles.input} placeholder='Search' onChangeText={(text) => {setText(text)}} />
      </View>
      
        

        
       <Meal meals={meals} input={text} setInput={setText} />
       
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f6f7',
    paddingTop:45,
    width: '100%',
    alignItems: 'center',
    
  },

  input: {
    flex: 1, 
    
    alignSelf: 'center',
    padding: 6,
    marginLeft: 2,
    
    
  },
  
  inputContainer: {
    flexDirection:'row',
    backgroundColor: '#d9dbda',
    width: '91%',
    borderRadius: 8,
    paddingLeft: 10,
    margin: 10,
    elevation: 3,
    shadowColor: 'black'
  }
  

 
});
