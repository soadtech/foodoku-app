import React from 'react'
import { View, Text, StatusBar } from 'react-native'
import FilterMenuList from '../../components/FilterMenuList'
import Header from '../../components/Header'
import RestaurantList from '../../components/RestaurantList'
import SearchBox from '../../components/SearchBox'
import colors from '../../utils/colors'
import { styles } from './styles'

export default function Home () {
    return (
        <View style={styles.container}>
            <StatusBar backgroundColor={colors.white} barStyle='dark-content' />
            <Header />
            <SearchBox />
            <FilterMenuList />

            <View style={{ flex: 1 }}>
                <Text style={styles.text}>Todos los restaurantes</Text>
                <View>
                    <RestaurantList />
                </View>
            </View>
        </View>
    )
}
