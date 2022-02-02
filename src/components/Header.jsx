import { View, Text } from 'react-native';
import React from 'react';
import { 
    COLORS,
    FONTS,
    SIZES,
    icons,
    constants,
    dummyData,
 } from '../constants';

export default function Header({
    containerStyle,
    title,
    leftComponent,
    rightComponent
}) {


  return (
    <View style={{
        ...containerStyle,
        flexDirection: 'row',

    }}>
        {/* Left */}
        {leftComponent}
        {/* Title */}
        <View style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
        }}>
        <Text style={{
            ...FONTS.h3,
        }}>
            {title}
        </Text>
        </View>

        {/* Right */}
        {rightComponent}

    </View>
  );
}
