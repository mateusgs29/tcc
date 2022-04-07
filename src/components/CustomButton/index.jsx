import React, { useState } from 'react'
import { Text, TouchableOpacity, ActivityIndicator, View } from 'react-native'
import styles from './style'

const CustomButton = ({ onPress, children, color, loading, optionsDisabled, newStyle, icon }) => {
 
  return (
    <TouchableOpacity
        disabled={optionsDisabled || loading}
        onPress={onPress}
        style={[styles.btn, styles[`${color}Btn`], newStyle]}
      >
        {loading ? (
          <ActivityIndicator size="small" color="#fff" />
        ) : (
          <View style={icon && styles.btnWithIcon}>
            <Text style={[styles.textBtn, styles[`${color}TextBtn`]]}>{children}</Text>
            {icon && icon}
          </View>
        )}
    </TouchableOpacity>
  )
}

export default CustomButton