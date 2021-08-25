import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import colors from '../../../utils/colors'
import { styles } from './styles'

export default function FilterItem ({ handler, filter }) {

    return (
        <TouchableOpacity onPress={() => handler(filter.id)} style={[styles.filter, { marginLeft: filter.id == '1' ? 0 : 10, backgroundColor: filter.selected ? colors.black : colors.gray }]}>
            <Text style={{ color: filter.selected ? colors.white : colors.black }}>{filter.name}</Text>
        </TouchableOpacity>
    )
}
