import { TouchableOpacity, View, Text, Image, StyleSheet } from 'react-native';
import Card from '../../home/main/Card';
import { CardsInfo } from '../../../components/Data/CardsInfo';
import { COLORS } from '../../../constants';

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
              onPress = {()=>props.onPressCard(card.id)}
              style = {card.id === props.activeCardId ? props.activeCard : props.inactiveCard }
              activeCard = {props.activeCardId}
              styleImgContainer= {card.id === props.activeCardId ? props.showImgContainer : props.hideImgContainer}
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
    }

});

export default CardsList;