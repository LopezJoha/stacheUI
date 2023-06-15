import { TouchableOpacity, View, Text, Image, StyleSheet } from 'react-native';
import Card from '../../home/main/Card';
import { CardsInfo } from '../../../components/Data/CardsInfo';

const  CardsList = (props) => { 
  
  return (
    <View style = {styles.containerList}>
        {CardsInfo.map((card)=>(
            <Card 
                key = {card.id}
                id = {card.id}
                number = {card.cardName}
                text ={card.previewText}
                onPress = {()=>props.onPressCard(card.id)}
                style = {card.id === props.activeCardId? props.activeCard : props.inactiveCard }
                />
        ))}
    </View>
  );
}

const styles = StyleSheet.create({
    containerList: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',    
    }

});

export default CardsList;