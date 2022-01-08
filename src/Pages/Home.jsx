import {Box} from "@mui/material";
import {Card} from "../components/Card";
import React, {useCallback, useEffect, useState} from "react";
import update from 'immutability-helper';
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import Loader from "../components/Loader";
import styled from "styled-components";

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
    const navigate = useNavigate();
    const [cards, setCards] = useState([]);
    console.log("cards", cards)


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
            {!isLoading && <BoxLoader><Loader/></BoxLoader>}

            <Box
                 sx={{
                     display: 'grid',
                     gap: 3,
                     gridTemplateColumns: 'repeat(4, 1fr)',
                     mb: 4,

                 }}
            >
                {/*{(isLoading && !dropCard.index) && (searchCountryData.length === 0) &&*/}
                {/*    countryData.map((item, idx) => {*/}
                {/*        const countryInfo = {*/}
                {/*            img: item.flags.svg,*/}
                {/*            name: item.name,*/}
                {/*            code: item.numericCode,*/}
                {/*            capital: item.capital,*/}
                {/*        }*/}
                {/*        return (*/}
                {/*            <Card index={idx} moveCard={moveCard}  key={item.name} {...countryInfo} onDropCard={handlerItem}*/}
                {/*                  onClick={() => navigate(`/details/${item.name}`)}/>*/}
                {/*        )*/}
                {/*    })}*/}
                {isLoading && (searchCountryData.length === 0) &&
                    cards.map((item, idx) => {
                        const countryInfo = {
                            img: item.flags.svg,
                            name: item.name,
                            code: item.numericCode,
                            capital: item.capital,
                        }
                        return (
                            <Card index={idx} moveCard={moveCard} key={item.name} {...countryInfo}
                                  onClick={() => navigate(`/details/${item.name}`)}/>
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
                            <Card  index={index} moveCard={moveCard}  key={item.name} {...countryInfo}
                                  onClick={() => navigate(`/details/${item.name}`)}/>
                        )
                    })}
            </Box>
        </>
    )
}