import React from 'react'
import { Image, Text } from 'react-native'

export default function Logo () {
    return (
        <Image resizeMode='contain' source={require('../../assets/logo.png')} />
    )
}
