import React, { useState } from 'react'
import { View, Text, FlatList, ActivityIndicator } from 'react-native'
import colors from '../../utils/colors'
import Restaurant from './Restaurant'
import EmptyList from '../EmptyList'

export default function RestaurantList () {
    const [loader, setLoader] = useState(false)
    const data = [
        {
            id: '1',
            image: 'https://images.unsplash.com/photo-1619926096619-5956ab4dfb1b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=634&q=80',
            name: 'El verdugo'
        },
        {
            id: '2',
            image: 'https://images.unsplash.com/photo-1596956470007-2bf6095e7e16?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=669&q=80',
            name: 'Salvo Patria'
        },
        {
            id: '3',
            image: 'https://images.unsplash.com/photo-1619926096619-5956ab4dfb1b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=634&q=80',
            name: 'El verdugo'
        },
        {
            id: '4',
            image: 'https://images.unsplash.com/photo-1596956470007-2bf6095e7e16?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=669&q=80',
            name: 'Salvo Patria'
        },
        {
            id: '3',
            image: 'https://images.unsplash.com/photo-1619926096619-5956ab4dfb1b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=634&q=80',
            name: 'El verdugo'
        },
        {
            id: '4',
            image: 'https://images.unsplash.com/photo-1596956470007-2bf6095e7e16?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=669&q=80',
            name: 'Salvo Patria'
        },
    ]
    return (
        <View>
            <FlatList
                contentContainerStyle={{
                    paddingVertical: 18,
                    alignItems: 'center'
                }}
                showsVerticalScrollIndicator={false}
                horizontal={false}
                numColumns={2}
                data={data}
                renderItem={({ item }) => (
                    <Restaurant restaurant={item} />
                )}
                keyExtractor={(_, i) => i}
                ListEmptyComponent={<EmptyList loader={loader} nameList='restaurantes' />
                }
            />
        </View>
    )
}
