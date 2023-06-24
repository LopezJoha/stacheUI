import { TouchableOpacity, View, Text, Image, StyleSheet } from 'react-native';
import Card from '../../home/main/Card';
import { CardsInfo } from '../../../components/Data/CardsInfo';
import { COLORS } from '../../../constants';
import { LinearGradient } from 'expo-linear-gradient';

const  CardsList = (props) => { 
  return(
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
              
            />
          
        ))}
  
    </View>
  );
}

const styles = StyleSheet.create({
    containerList: {
    backgroundColor: COLORS.background3,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row', 
    gap:15, 
    paddingTop: '5%'   
    },
    grediant:{     
      borderRadius: 20,
     
   },

});

export default CardsList;