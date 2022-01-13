import * as React from 'react';
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
import styled from 'styled-components'
import {Button} from "@mui/material";
import {useEffect, useState} from "react";
import {useDispatch} from "react-redux";


const IconSearch = styled(SearchIcon)`
  color: white;
  position: absolute;
  left: 5%;
  top: 30%;
  z-index: 100;
`

const InputSearch = styled(TextField)
({
    '& input': {
        color: 'white',
        marginLeft: "3rem"
    },
    '& label': {
        color: 'white',
        paddingLeft: "3rem"
    },
    '& label.Mui-focused': {
        color: 'orange',
        paddingLeft: 0
    },
    '& .MuiInput-underline:after': {
        borderBottomColor: 'orange',
    },
    '& .MuiOutlinedInput-root': {
        '& fieldset': {
            borderColor: 'white',
        },
        '&:hover fieldset': {
            borderColor: 'orange',
        },
        '&.Mui-focused fieldset': {
            borderColor: 'orange',
        },
    },
})

const Div = styled.div`position: relative`

const Wrapper = styled.div`
  margin-left: 2rem;
`;

const ResetButton = styled(Button)`
  height: 3.5rem;
  color: white !important;
  border-color: white !important;

  &:hover {
    color: orange !important;
  }
`

export const Controls = ({onSearch}) => {

    const [search, setSearch] = useState('');
    const dispatch = useDispatch();

    useEffect(() => {
        onSearch(search)
    }, [search])

    const ResetSearch = () => {
        setSearch('')
        dispatch({type:'RESET_SEARCH_COUNTRY_DATA'})
    }

    return (
        <>
            <Div>
                <InputSearch sx={{width: '40ch'}} id="search" label="Search country"
                             onChange={e => setSearch(e.target.value)} value={search} variant="outlined"/>
                <IconSearch/>
            </Div>

            <Wrapper>
                <ResetButton onClick={ResetSearch} variant="outlined">Reset Search</ResetButton>
            </Wrapper>

        </>
    )
}