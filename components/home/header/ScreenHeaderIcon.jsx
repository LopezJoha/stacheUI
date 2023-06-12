import React from 'react';
import { TouchableOpacity, Image } from 'react-native';
import styles from './screenHeaderIcon.style';

const ScreenHeaderIcon = ({iconUrl, dimension, handlePress}) => {
  return (
    <TouchableOpacity style={styles.btnContainer}>
        <Image source={iconUrl}
          resizeMode='cover'
          style={styles.btnImg(dimension)}
        />
    </TouchableOpacity>
  )
}

export default ScreenHeaderIcon;