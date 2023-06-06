import React from 'react';
import { TouchableOpacity, Image } from 'react-native';
import styles from './screenHeaderIcon.style';

const ScreenHeaderIcon = ({iconUrl, dimension, handlePress}) => {
  return (
    <TouchableOpacity>
        <Image source={iconUrl}/>
    </TouchableOpacity>
  )
}

export default ScreenHeaderIcon;