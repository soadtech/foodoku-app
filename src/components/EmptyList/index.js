import React from 'react'
import { View, Text, ActivityIndicator } from 'react-native'
import colors from '../../utils/colors'

export default function EmptyList ({ loader, nameList }) {
    return (
        <>
            {
                loader ?
                    <View style={{ flex: 1 }}>
                        <ActivityIndicator size={100} color={colors.black} />
                    </View>
                    :
                    <View style={{ alignItems: 'center' }}>
                        <Text>No hay {nameList}</Text>
                    </View>
            }
        </>
    )
}
