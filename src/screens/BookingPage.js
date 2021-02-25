import React ,{useState} from 'react';
import { Text, StyleSheet,View,TouchableOpacity } from 'react-native';
import styles from '../styles/flightstyles';
import {Input} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome'; 
const BookingPage = (props) => {

  const passengers=props.navigation.getParam('passengers', 'no-passengers');
  const cost=props.navigation.getParam('cost', 'no-cost');
  const costs=props.navigation.getParam('costs', 'no-costs');
  console.log('passengers:'+passengers);


  var loop=[];
   
  for ( let i=0;i<passengers;i++)
  {
    loop.push(
      <View key={i}>
        <View>
              
              <Input
  placeholder='enter your name ' 
  label="name"
  leftIcon={
    <Icon
      name='user'
      size={20}
      color='black'
    />
  }
  />
  </View>
        
        </View>

    )
  }
 
  return  (
    <View>
    <View>
    <Text style={styles.text}>passengers data </Text>
    
    <TouchableOpacity style={styles.bookingbuttonStyle}
      onPress={()=>props.navigation.navigate('Confirm',{cost,costs,passengers})}>
      <Text>confirm</Text>
    </TouchableOpacity>
    </View>
    {loop}
    </View>
  );
};


export default BookingPage;
