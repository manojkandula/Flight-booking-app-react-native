import React,{useState} from "react";
import { Text, StyleSheet,View,TouchableOpacity} from "react-native";
import styles from '../styles/flightstyles';
const ConfirmationPage = (props) => {

  const passengers=props.navigation.getParam('passengers', 'no-passengers');
  const cost=props.navigation.getParam('cost', 'no-cost');
  const costs=props.navigation.getParam('costs', 'no-costs');
 
 const totalcost=(cost+costs)*passengers;
  console.log('cost:'+cost);
  return  (
    <View>
    <Text style={styles.text}>confirmation page</Text>
    <Text></Text>
    <Text style={styles.textr}> Booking was succesful</Text>
    <Text></Text>
    <Text style={styles.textr}>Total nuber of passengers:{passengers}</Text>
    <Text></Text>
    <Text style={styles.textr}>Total booking cost:{totalcost}</Text>
    <TouchableOpacity style={styles.confirmationsbuttonStyle}
      onPress={()=>props.navigation.navigate('Search')}>
      <Text>submit</Text>
    </TouchableOpacity>
    </View>
  );
};


export default ConfirmationPage
