import React from 'react'
import { FilmProvider } from '../provider'
import { Test } from '../components'

const App = () => {

    return (
        <FilmProvider>
            <Test />
        </FilmProvider>
    )
}

export default App