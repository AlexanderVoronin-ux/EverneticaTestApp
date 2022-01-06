import styled from 'styled-components'
import {Container} from "./Container";
import {Link, useLocation} from "react-router-dom";
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Controls} from "./Controls";

const HeaderEl = styled.header`
  background-color: black;
  box-shadow: 0 0 20px 5px white;
  z-index: 2;
  position: relative;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 1.5rem 0;
`;
const Wrapper1 = styled.div`
  display: flex;
  align-items: center;
  padding: 1.5rem 0;
  justify-content: center;
  margin: 0 auto;

`;

const Title = styled(Link)`
  color: orange;
  text-decoration: none;
  font-size: 24px;

  &:hover {
    color: white;
  }
`;

export const Header = () => {

    const dispatch = useDispatch();
    const location = useLocation();
    const countryData = useSelector(s => s.countryData);
    const [searchCountries, setSearchCountries] = useState([])


    const HandleSearch = (search) => {
        let data = []
        if (search) {
            data = countryData.filter(value => value.name.toLowerCase().includes(search.toLowerCase()))
        }
        setSearchCountries(data)
    }

    useEffect(() => {
        if (searchCountries && countryData) {
            dispatch({type: 'ADD_SEARCH_COUNTRY_DATA', payload: {searchCountries}})
        }
    }, [countryData, searchCountries])

    return (
        <>
            <HeaderEl>
                <Container>
                    <Wrapper>
                        <Title to='/'>Country Search</Title>
                    </Wrapper>
                    {(location.pathname === '/') && <Wrapper1>
                        <Controls onSearch={HandleSearch}/>
                        {/*<Search onSearch={HandleSearch}/>*/}
                        {/*<ResetSearch onSearch={HandleSearch}/>*/}
                    </Wrapper1>
                    }
                </Container>
            </HeaderEl>
        </>
    )
}
