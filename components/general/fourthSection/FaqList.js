import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'; 
import Lettering from '../../home/main/lettering';
import { COLORS, SIZES } from '../../../constants';
import CardFaq from './CardFaq';
import { FaqInfo } from '../../Data/FaqInfo';

const FaqList =()=>{
    return(
        <View style={styles.container}>
            <View style={styles.containerList}>
                {FaqInfo.map((faq)=>(
                    <CardFaq
                        src={faq.src}
                        title={faq.title}
                        subtitle={faq.subtitle}
                        button={null}
                    />
                ))}
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    container:{

    },
    containerList:{
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row', 
    gap:40, 
    }
})

export default FaqList;