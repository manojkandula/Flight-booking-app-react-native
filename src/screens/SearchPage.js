import React,{useState} from 'react';
import { Text,View,TouchableOpacity } from 'react-native';
import styles from '../styles/flightstyles';
import {Input} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome'; 

 const SearchPage = (props) => {
  

  const [source,setsource]=useState('');
  const [destination,setdestination]=useState('');
  const [passengers,setpassengers]=useState('');
  const [fromdate,setfromdate]=useState('');
  const [todate,settodate]=useState('');
  return (
    <View>
    <Text style={styles.text}>HomeScreen</Text>
    <Text></Text>
<Input
  placeholder='enter  city name '
  onChangeText={(source) => setsource(source)}
  value={source}
  label="source"
 
  />
  <Input
  placeholder='enter city name'
  onChangeText={(destination) => setdestination (destination)}
  value={destination}
  label="destination"
  
  />
  <Input
  placeholder='enter no of passengers'
  onChangeText={(passengers) => setpassengers (passengers)}
  value={passengers}
  label="passengers"
  
  />
  <Input
  placeholder='enter departure date '
  onChangeText={(fromdate) => setfromdate(fromdate)}
  value={fromdate}
  label="departure date"
  
  />
  <Input
  placeholder='enter return date'
  onChangeText={(todate) => settodate (todate)}
  value={todate}
  label="return date "

  />
 
    <TouchableOpacity style={styles.searchbuttonStyle}
      onPress={()=>props.navigation.navigate('SearchR',{source,destination,passengers,fromdate,todate})}>
      <Text>submit</Text>
    </TouchableOpacity>
    </View>
  );
};



export default SearchPage;

