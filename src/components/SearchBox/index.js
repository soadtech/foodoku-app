import React, { useContext, useState, useEffect } from 'react'
import { View } from 'react-native'
import CustomInput from '../CustomInput'
import { AppContext } from '../../context/AppContext'
import { styles } from './styles'

export default function SearchBox () {
    const { restaurants, setRestaurants, restaurantInitial } = useContext(AppContext);

    const handleFilter = (e) => {
        let expresion = new RegExp(`${e.toUpperCase()}.*`, "i");
        let restaurantsFound = restaurantInitial.filter(restaurant => expresion.test(restaurant.fields.name));
        setRestaurants(restaurantsFound);
    }
    return (
        <View style={styles.container}>
            <CustomInput handler={handleFilter} placeholder='Buscar restaurante' />
        </View>
    )
}
