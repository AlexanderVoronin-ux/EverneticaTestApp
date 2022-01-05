import React, {useEffect} from "react";
import {Header} from "./components/Header/Header";
import {Main} from "./components/Main";
import {Card} from "./components/Card";
import {useDispatch, useSelector} from "react-redux";
import {Box} from "@mui/material";

function App() {
    const dispatch = useDispatch();
    const countryData = useSelector(s => s.countryData);
    const isLoading = useSelector(s => s.isLoading);

    useEffect(() => {
        dispatch({type: 'REQUEST_COUNTRY_DATA'})
    }, [dispatch])


    return (
        <>
            <Header/>
            <Main>
                <Box
                    sx={{
                        display: 'grid',
                        gap: 3,
                        gridTemplateColumns: 'repeat(4, 1fr)',
                        mb: 4
                    }}
                >
                    {
                        isLoading && countryData.map((item) => {
                            const countryInfo = {
                                img: item.flags.svg,
                                name: item.name,
                                // code: item.curre
                            }
                        return (
                        <Card  key={item.name} {...countryInfo} />
                        )
                    })}
                </Box>
            </Main>
        </>
    )
}

export default App;
