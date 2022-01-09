import {useNavigate, useParams} from "react-router-dom";
import WestIcon from '@mui/icons-material/West';
import {IconButton} from "@mui/material";
import styled from "styled-components";
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {DetailInfo} from "./DetailInfo";

const Wrapper = styled.div`
width: 100%;
`

const ButtonNavigate = styled(IconButton)`
  display: block;
  color: black !important;
  font-weight: bold;
`

const IconNavigate = styled(WestIcon)`
  color: orange;
  font-size: 3.0rem !important;
`

export const Details = () => {

    const countryNameData = useSelector(s => s.countryDataName);
    const {name} = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch({type: 'REQUEST_COUNTRY_DATA_NAME', payload: {name}})
    }, [dispatch, name])


    return (
        <>
            <Wrapper>
                <ButtonNavigate onClick={() => navigate(-1)} aria-label="go back">
                    <IconNavigate/>Back
                </ButtonNavigate>
                {countryNameData && <DetailInfo {...countryNameData}/>}
            </Wrapper>
        </>
    )
}