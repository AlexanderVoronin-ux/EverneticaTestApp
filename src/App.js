import React from "react";
import {Header} from "./components/Header/Header";
import {Main} from "./components/Main";
import {RoutesApp} from "./Routes/RoutesApp";

function App() {
    return (
        <>
            <Header/>
            <Main>
                <RoutesApp/>
            </Main>
        </>
    )
}

export default App;
