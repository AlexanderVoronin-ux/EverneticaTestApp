import styled from "styled-components";
import {Box, CardMedia, Link, ListItemText, Paper} from "@mui/material";

const Wrapper = styled(Box)`
  display: grid;
  grid-template-rows: 1fr auto;
`;
const TextWrapper = styled.div`
  text-align: center;
`;

const LinkWrapper = styled(Link)`
    text-decoration: none !important;
`

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

export const Card = ({img, name, code, onClick}) => {
    return (
        <Box
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
                <Wrapper >
                    <LinkWrapper href="#">
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
                        </TextWrapper>
                    </LinkWrapper>

                </Wrapper>
            </Paper>
        </Box>

        // <Wrapper onClick={onClick}>
        //     <CardImage/>
        //     <CardBody>
        //         <CardTitle>{name}</CardTitle>
        //         <CardText>{code}</CardText>
        //     </CardBody>
        // </Wrapper>
    )
}