import React, { useContext } from 'react'
import { View, Text, StatusBar, Alert } from 'react-native'
import FilterMenuList from '../../components/FilterMenuList'
import Header from '../../components/Header'
import RestaurantList from '../../components/RestaurantList'
import SearchBox from '../../components/SearchBox'
import { AppContext } from '../../context/AppContext'
import colors from '../../utils/colors'
import { styles } from './styles'

export default function Home () {
    const { filter } = useContext(AppContext);
    return (
        <View style={styles.container}>
            <StatusBar backgroundColor={colors.white} barStyle='dark-content' />
            <Header />
            <SearchBox />
            <FilterMenuList />

            <View style={{ flex: 1 }}>
                <Text style={styles.text}>{filter.isFilter ? `Restaurantes filtrador por "${filter.filterName}"` : 'Todos los restaurantes'}</Text>
                <View>
                    <RestaurantList />
                </View>
            </View>
        </View>
    )
}
