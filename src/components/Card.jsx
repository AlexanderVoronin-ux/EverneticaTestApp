import styled from "styled-components";
import {Box, CardMedia, ListItemText, Paper} from "@mui/material";

const Wrapper = styled(Box)`
  display: grid;
  grid-template-rows: 1fr auto;
  cursor: pointer;
`;
const TextWrapper = styled.div`
  text-align: center;
`;

const CardImage = styled(CardMedia)`
  display: block;
  width: 100%;
  height: 200px;
  object-fit: cover;
  object-position: center;
  padding: 5px;
`;


const CardTitle = {
    fontSize: "16px",
    color: "white",
}

const CardText = {
    fontSize: "12px",
    color: "white",
}

export const Card = ({img, name, code, capital, onClick}) => {
    return (
        <Box onClick={onClick}
             sx={{
                 display: 'flex',
                 flexWrap: 'wrap',
                 '& > :not(style)': {
                     width: "100%",
                     backgroundColor: "black",
                 },
                 '& > :hover': {
                     boxShadow: "0px 8px 10px -5px rgb(255 255 255 / 20%), 0px 16px 24px 2px rgb(255 255 255 / 20%), 0px 6px 30px 5px rgb(255 255 255 / 20%)",
                 },
             }}
        >
            <Paper elevation={4}>
                <Wrapper>
                    <div>
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
                    </TextWrapper>

                </Wrapper>
            </Paper>
        </Box>

    )
}