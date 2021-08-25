import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import colors from '../../../utils/colors'
import * as Icons from '../../icons'
import { styles } from './styles'

const TODOS_FILTER_SELECTED = '1'
const MARGIN = 10
const NO_MARGIN = 10

export default function FilterItem ({ handler, filter }) {
    const marginLeft = filter.id == TODOS_FILTER_SELECTED ? NO_MARGIN : MARGIN
    const backgroundColor = filter.selected ? colors.black : colors.gray
    return (
        <TouchableOpacity onPress={() => handler(filter.id, filter)} style={[styles.filter, { marginLeft, backgroundColor }]}>
            <Text style={{ color: filter.selected ? colors.white : colors.black }}>{filter.name}</Text>
            {filter.selected && (
                <View style={styles.mark}>
                    <Icons.SvgMark />
                </View>
            )}
        </TouchableOpacity>
    )
}
