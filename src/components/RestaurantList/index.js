import React, { useState, useEffect } from 'react'
import { View, FlatList, Alert } from 'react-native'
import Restaurant from './Restaurant'
import EmptyList from '../EmptyList'
import client from '../../services/contentful'

export default function RestaurantList () {
    const [loader, setLoader] = useState(false)
    const [restaurants, setRestaurants] = useState([])
    const getRestaurant = async () => {
        setLoader(true)
        try {
            const res = await client.getEntries({ 'content_type': 'restaurant' })
            setRestaurants(res.items)
            setLoader(false)
        } catch (error) {
            Alert.alert("Hubo un error")
            setLoader(false)
        }
    }
    useEffect(() => {
        getRestaurant()
    }, [])
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
                data={restaurants}
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
