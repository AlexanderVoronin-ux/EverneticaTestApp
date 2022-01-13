import styled from "styled-components";
import {Box, CardMedia, ListItemText, Paper} from "@mui/material";
import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import CheckboxInputSearch from "./CheckBoxInputSearch";


const Wrapper = styled(Box)`
  display: grid;
  grid-template-rows: 1fr auto;
  cursor: pointer;
`;
const TextWrapper = styled.div`
  text-align: center;
  position: relative;
`;

const CardImage = styled(CardMedia)`
  display: block;
  min-width: 100%;
  height: 80px;
  object-fit: contain;
  object-position: center;
  padding: 5px;
`;


const CardTitle = {
    fontSize: "12px",
    color: "white",
}

const CardText = {
    fontSize: "10px",
    color: "white",
}


export const CardAddSearch = ({item, img, name, code, capital, onClick}) => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const addCountryDataItem = useSelector(s => s.addCountryDataItem);

    const HandleChange = () => {

        let newCountryDataItem = addCountryDataItem.filter(i => i !== item);

        dispatch({type: "REMOVE_SEARCH_COUNTRY_ITEM", payload: newCountryDataItem})
    }



    return (
        <Box
             onClick={onClick}
             sx={{
                 display: 'flex',
                 flexWrap: 'wrap',
                 '& > :not(style)': {
                     width: "100%",
                     backgroundColor: "black",
                 },
                 '& > :hover': {
                     boxShadow: "0px 8px 10px -5px rgb(255 255 255 / 20%)," +
                         " 0px 16px 24px 2px rgb(255 255 255 / 20%), " +
                         "0px 6px 30px 5px rgb(255 255 255 / 20%)",
                 },
             }}
        >
            <Paper elevation={4}>
                <Wrapper>
                    <div onClick={() => navigate(`/details/${name}`)}>
                        <CardImage
                            component="img"
                            image={img}
                            alt="flag"
                        />
                    </div>
                    <TextWrapper>
                        <ListItemText primary={name} primaryTypographyProps={{style: CardTitle}}
                                      secondary={code} secondaryTypographyProps={{style: CardText}}
                        />
                        <ListItemText secondary={`Capital: ${capital}`} secondaryTypographyProps={{style: CardText}}
                        />
                    <CheckboxInputSearch onClick={HandleChange} label="label"/>
                    </TextWrapper>

                </Wrapper>
            </Paper>
        </Box>

    )
}