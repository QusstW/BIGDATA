import React from 'react'
import { FilmProvider } from '../provider'
import { NavBar, MoviesTable } from '../components'
import { Container } from "@material-ui/core";

const App = () => {

    return (
        <FilmProvider>
            <div>
                <NavBar />
                <Container maxWidth="lg">
                    <MoviesTable />
                </Container>
            </div>
        </FilmProvider>
    )
}

export default App