import {Box} from "@mui/material";
import {Card} from "../components/Card";
import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import Loader from "../components/Loader";

export const Home = () => {

    const dispatch = useDispatch();
    const countryData = useSelector(s => s.countryData);
    const isLoading = useSelector(s => s.isLoading);
    const searchCountryData = useSelector(s => s.searchCountries);
    const navigate = useNavigate();


    useEffect(() => {
        if (!countryData && (searchCountryData.length === 0))
            dispatch({type: 'REQUEST_COUNTRY_DATA'})
    }, [dispatch, countryData, searchCountryData])

    return (
        <>
            {!isLoading &&  <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}><Loader /></Box>}

            <Box
            sx={{
                display: 'grid',
                gap: 3,
                gridTemplateColumns: 'repeat(4, 1fr)',
                mb: 4
            }}
        >
            {isLoading && (searchCountryData.length === 0) &&
                countryData.map((item) => {
                    const countryInfo = {
                        img: item.flags.svg,
                        name: item.name,
                        code: item.numericCode,
                    }
                    return (
                        <Card key={item.name} {...countryInfo} onClick={() => navigate(`/details/${item.name}`)}/>
                    )
                })}
            {isLoading && (searchCountryData.length !==0) &&
                searchCountryData.map((item) => {
                    const countryInfo = {
                        img: item.flags.svg,
                        name: item.name,
                        code: item.numericCode,
                    }
                    return (
                        <Card key={item.name} {...countryInfo} onClick={() => navigate(`/details/${item.name}`)}/>
                    )
                })}
        </Box>
        </>
    )
}