import React, { useState, useEffect, useContext } from 'react'
import { View, FlatList, Alert } from 'react-native'
import Restaurant from './Restaurant'
import EmptyList from '../EmptyList'
import client from '../../services/contentful'
import { AppContext } from '../../context/AppContext'

export default function RestaurantList () {
    const [loader, setLoader] = useState(false)
    const { restaurants, setRestaurants, setRestaurantInitial } = useContext(AppContext);
    const getRestaurant = async () => {
        setLoader(true)
        try {
            const res = await client.getEntries({ 'content_type': 'restaurant' })
            setRestaurants(res.items)
            setLoader(false)
            setRestaurantInitial(res.items)
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
                    paddingVertical: 18
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
