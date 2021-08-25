import React from 'react'
import { View, Text, ScrollView } from 'react-native'
import { styles } from './styles'
import FilterItem from './FilterItem'

const filters = [
    {
        id: '1',
        name: 'Todos'
    },
    {
        id: '2',
        name: 'Sushi'
    },
    {
        id: '3',
        name: 'Pet friendly'
    },
    {
        id: '4',
        name: 'Vegano'
    },
    {
        id: '5',
        name: 'Vegano 1'
    },
    {
        id: '6',
        name: 'Vegano 2'
    },
]

export default function FilterMenuList () {
    return (
        <View style={styles.container}>
            <ScrollView showsHorizontalScrollIndicator={false} horizontal style={styles.list}>
                {filters.map(filter => (
                    <FilterItem key={filter.id} item={filter} />
                ))}
            </ScrollView>
        </View>
    )
}
