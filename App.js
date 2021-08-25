import Home from './src/containers/Home'
import React from 'react'
import { ContextWrapper } from './src/context/AppContext'

export default function App () {
    return (
        <ContextWrapper>
            <Home />
        </ContextWrapper>
    )
}
