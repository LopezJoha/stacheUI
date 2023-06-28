import { TouchableOpacity, View, Text, Image, StyleSheet } from 'react-native';
import Card from '../../home/main/Card';
import { CardsInfo } from '../../../components/Data/CardsInfo';
import { COLORS } from '../../../constants';
import { TextInput } from 'react-native-gesture-handler';
import StyledButton from '../StyledButton';


const  CardsList = (props) => { 
  return(
  <View style={styles.container}>
    <View style = {styles.containerList}>    
        
        {CardsInfo.map((card)=>(
            <Card 
              key = {card.id}
              id = {card.id}
              number = {card.cardName}
              text ={card.previewText}
              image = {card.src}
              title ={card.title}
              subtitle = {card.subtitle}
              onPress = {()=>props.onPressCard(card.id)}
              activeCard = {props.activeCardId}
              callAction = {card.id === 4 && props.activeCardId === 4 ? 
              <View style={styles.calltheAction}>
                <StyledButton buttonText = 'Launche Stache'/>
                </View>
              : null }
            />
          
          
        ))}

  
    </View>
    
</View>  

  );
}

const styles = StyleSheet.create({
  container:{
    flexDirection: 'column'
  },
  containerList: {
    backgroundColor: COLORS.background1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row', 
    gap:15,   
  },
  calltheAction:{
    width:'100%',
    paddingVertical:'10%',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems:'center',
    gap:15
    
  },
  input:{
    width: '70%',  
     height: 45,
     backgroundColor: COLORS.buttonBackground,
     opacity:1,
     borderWidth: 0.5,
     borderColor: COLORS.buttonBorder,
     borderRadius: 15,
     paddingLeft: '5%', 
   },  
      

});

export default CardsList;