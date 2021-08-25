import React from 'react'
import { View, Text, TextInput } from 'react-native';
import * as Icons from '../icons'
import { styles } from './styles';

export default function CustomInput ({ handler, placeholder }) {
    return (
        <View style={styles.container}>
            <Icons.SvgSearch />
            <View style={styles.input}>
                <TextInput onChangeText={(text) => handler(text)} style={{ width: '100%' }} placeholder={placeholder} />
            </View>
        </View>
    )
}
