import React from 'react'
import { FilmProvider } from '../provider'
import { BrowserRouter, Route } from "react-router-dom";
import { NavBar, MoviesTable, Film, About } from '../components'
import { Container } from "@material-ui/core";
import { useFilm } from '../hooks'

const App = () => {

    const { startPage } = useFilm()
    return (

        <BrowserRouter>
            <NavBar />
            <Container maxWidth="lg" style={{ marginTop: "5%" }}>

                {startPage ? <About /> : <div>
                    <Route path='/table' render={() => <MoviesTable />} />
                    <Route path='/film' render={() => <Film />} />
                </div>}


            </Container>
        </BrowserRouter>

    )
}

export default App