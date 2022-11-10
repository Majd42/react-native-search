import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableNativeFeedback } from 'react-native';


function Meal({meals, input, setInput}) {
    
    return (
        <ScrollView style={styles.productsContainer} contentContainerStyle={{alignItems: 'center'}}>
            <View  style={{width: '90%',}}>
                {meals.map((meal) => {
                    if (input === '') {
                        return(

                            <TouchableNativeFeedback key={meal.idMeal} onPress={()=>console.log('Clicked')} >
                                <View  style={styles.productRapper}>
                                    <Image style={styles.productImg} source={{ uri: meal.strMealThumb}} />
                                    <Text style= {styles.mealTitle}>{meal.strMeal}</Text>
                                    <Text style={styles.mealCat}>{meal.strCategory}</Text>
                                </View>
                            </TouchableNativeFeedback>
                        )

                    }

                    if(meal.strMeal.toLowerCase().includes(input.toLowerCase())){
                        return(

                            <TouchableNativeFeedback key={meal.idMeal}>

                                <View key={meal.idMeal} style={styles.productRapper}>
                                    <Image style={styles.productImg} source={{ uri: meal.strMealThumb}} />
                                    <Text style= {styles.mealTitle} >{meal.strMeal}</Text>
                                    
                                </View>
                            </TouchableNativeFeedback>
                        )
                    }
                })}
            </View>
            
        </ScrollView>
    );
}

const styles = StyleSheet.create({

    productsContainer: {
        flex: 1,
        
        width: '100%',
        height: '100%'
        
    },

    productRapper: {
        marginVertical: 20,
        elevation: 10,
        backgroundColor: 'white',
        paddingBottom: 10,
        shadowColor:'black',
        borderBottomWidth: 2,
        borderColor: 'red'
        
    },

    productImg: {
        width: '100%',
        height: 200,
        
    },

    mealTitle: {
        marginTop: 10,
        marginLeft: 10,
        fontSize: 20,
        color: '#050505',


    },

    mealCat: {
        fontSize: 13,
        color: '#b0aeae',
        opacity: 1,
        marginLeft: 10,
        

    }

})

export default Meal;