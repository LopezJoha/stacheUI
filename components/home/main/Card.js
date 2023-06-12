
import { TouchableOpacity, View, Text, Image, StyleSheet } from 'react-native';
import { COLORS, SIZES, SHADOWS } from "../../../constants";


const  Card = (props) => {  
  
  const styles = StyleSheet.create({
    container: {      
      
    },     
    text:{
      fontSize: 24,
      color: 'white'
    }  
  });

  return (
    <TouchableOpacity style={props.style} onPress={props.onPress} >
      <View >      
        <Text style={styles.text}>{props.number}</Text>           
        <Text style={styles.text} >{props.text}</Text>
      </View>
       
    </TouchableOpacity>
  );
}

export default Card;