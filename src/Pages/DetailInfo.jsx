import styled from "styled-components";
import {Badge, Box, Card, Divider, Paper} from "@mui/material";

const Wrapper = styled.div`
  margin-top: 3rem;
  margin-bottom: 3rem;
  width: 100%;
  display: grid;
  grid-template-columns: minmax(400px, 600px) 1fr;
  gap: 2rem;
`
const InfoImage = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
`

const InfoTitle = styled.h1`
  color: orange;
  text-align: center;
`

const ListGroup = styled.div``

const List = styled.ul`
  margin-right: 2rem;
`

const ListItem = styled.li`
  color: white;
  list-style-type: none;
  margin-bottom: 1rem;
`

export const DetailInfo = (props) => {
    const {name, flags, capital, population, region, nativeName, isSelected} = props


    return (
        <Wrapper>
            <Paper elevation={12}>
                <InfoImage src={flags.svg} alt={name}/>
            </Paper>
            <Card sx={{minWidth: 300, backgroundColor: "black", position: "relative"}}>
                {isSelected && <Badge badgeContent="Selected" color="secondary"
                        style={{position: "absolute", top: "8%", left: "13%"}}/>
                }                <InfoTitle>{name}</InfoTitle>
                <Divider sx={{borderColor: "white"}} variant="middle"/>
                <ListGroup>
                    <List>
                        <ListItem><h3>Native Name:</h3> {nativeName}</ListItem>
                        <Divider sx={{borderColor: "white"}}/>
                        <ListItem><h3>Capital:</h3> {capital}</ListItem>
                        <Divider sx={{borderColor: "white"}}/>
                        <ListItem><h3>Region:</h3> {region}</ListItem>
                        <Divider sx={{borderColor: "white"}}/>
                        <ListItem><h3>Population:</h3> {population}</ListItem>
                    </List>
                </ListGroup>
            </Card>
        </Wrapper>

    )
}