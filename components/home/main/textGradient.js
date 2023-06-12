import React from "react";
import { Text, View } from "react-native";
import MaskedView from "@react-native-community/masked-view";
//import LinearGradient from "react-native-linear-gradient";
    
const GradientText = (props) => {
  return (
    <View></View>
    /*<MaskedView maskElement={<Text {...props} />}>
      <LinearGradient
        colors={["red", "green"]}   
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}     
      >
        <Text {...props} style={[props.style, { opacity: 0 }]} />
      </LinearGradient>
    </MaskedView>
    <MaskedView
        style={{ flex: 1, flexDirection: 'row', height: '100%' }}
        maskElement={
          <View
            style={{
              // Transparent background because mask is based off alpha channel.
              backgroundColor: 'transparent',
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >
            <Text
              style={{
                fontSize: 60,
                color: 'black',
                fontWeight: 'bold'
              }}
            >
              Basic Mask
            </Text>
          </View>
        }
      >
       
        <View style={{ flex: 1, height: '100%', backgroundColor: '#324376' }} />
        <View style={{ flex: 1, height: '100%', backgroundColor: '#F5DD90' }} />
        <View style={{ flex: 1, height: '100%', backgroundColor: '#F76C5E' }} />
        <View style={{ flex: 1, height: '100%', backgroundColor: '#e1e1e1' }} />
      </MaskedView>

*/
  );
};

export default GradientText;