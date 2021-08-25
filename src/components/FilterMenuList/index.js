import React, { useState } from 'react'
import { View, Text, ScrollView } from 'react-native'
import { styles } from './styles'
import FilterItem from './FilterItem'


export default function FilterMenuList () {
    const [filters, setFilters] = useState([
        {
            id: '1',
            name: 'Todos',
            selected: true
        },
        {
            id: '2',
            name: 'Sushi',
            selected: false
        },
        {
            id: '3',
            name: 'Pet friendly',
            selected: false
        },
        {
            id: '4',
            name: 'Vegano',
            selected: false
        },
        {
            id: '5',
            name: 'Vegano 1',
            selected: false
        },
        {
            id: '6',
            name: 'Vegano 2',
            selected: false
        },
    ])
    const handlerChangueFilter = (filderId) => {
        const newFilters = filters.map((filter, index) => {
            if (filderId !== filter.id) return { ...filter, selected: false };
            return {
                ...filter,
                selected: true
            };
        });
        setFilters(newFilters)
    }
    return (
        <View style={styles.container}>
            <ScrollView showsHorizontalScrollIndicator={false} horizontal style={styles.list}>
                {filters.map(filter => (
                    <FilterItem handler={handlerChangueFilter} key={filter.id} filter={filter} />
                ))}
            </ScrollView>
        </View>
    )
}
