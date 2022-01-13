import {Box, Divider} from "@mui/material";
import {Card} from "../components/Card";
import React, {useCallback, useEffect, useState} from "react";
import update from 'immutability-helper';
import {useDispatch, useSelector} from "react-redux";
import Loader from "../components/Loader";
import styled from "styled-components";
import {CardAddSearch} from "../components/CardAddSearch";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`

const BoxLoader = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const Home = () => {

    const dispatch = useDispatch();
    const countryData = useSelector(s => s.countryData);
    const isLoading = useSelector(s => s.isLoading);
    const searchCountryData = useSelector(s => s.searchCountries);
    const addCountryDataItem = useSelector(s => s.addCountryDataItem);
    const [cards, setCards] = useState([]);

    const moveCard = useCallback((dragIndex, hoverIndex) => {
        const dragCard = cards[dragIndex];
        setCards(update(cards, {
            $splice: [
                [dragIndex, 1],
                [hoverIndex, 0, dragCard],
            ],
        }));
    }, [cards]);

    useEffect(() => {
        if (!countryData && (searchCountryData.length === 0))
            dispatch({type: 'REQUEST_COUNTRY_DATA'})
    }, [dispatch, countryData, searchCountryData])

    useEffect(() => {
        if (countryData) setCards(countryData);
    }, [countryData])


    return (
        <>
            <Wrapper>
            {!isLoading && <BoxLoader><Loader/></BoxLoader>}
            <Box sx={{
                display: 'grid',
                gap: 3,
                gridTemplateColumns: 'repeat(8, 1fr)',

            }}
            >
                {isLoading &&  (addCountryDataItem.length !== 0) &&
                    addCountryDataItem.map((item, index) => {
                        const countryInfo = {
                            img: item.flags.svg,
                            name: item.name,
                            code: item.numericCode,
                            capital: item.capital,
                        }
                        return (
                            <CardAddSearch item={item} index={index} moveCard={moveCard} key={item.name} {...countryInfo} />
                        )
                    })}

            </Box>
                {(addCountryDataItem.length !== 0) && <Divider sx={{borderColor: "black", margin: "20px 0"}} />}
            <Box
                sx={{
                    display: 'grid',
                    gap: 3,
                    gridTemplateColumns: 'repeat(5, 1fr)',
                    mb: 4,

                }}
            >
                {isLoading && (searchCountryData.length === 0) &&
                    cards.map((item, idx) => {
                        const countryInfo = {
                            img: item.flags.svg,
                            name: item.name,
                            code: item.numericCode,
                            capital: item.capital,
                        }
                        return (
                            <Card item={item} index={idx} moveCard={moveCard} key={item.name} {...countryInfo}
                            />
                        )
                    })}


                {isLoading && (searchCountryData.length !== 0) &&
                    searchCountryData.map((item, index) => {
                        const countryInfo = {
                            img: item.flags.svg,
                            name: item.name,
                            code: item.numericCode,
                            capital: item.capital,
                        }
                        return (
                            <Card item={item} index={index} moveCard={moveCard} key={item.name} {...countryInfo} />
                        )
                    })}
            </Box>
            </Wrapper>
        </>
    )
}