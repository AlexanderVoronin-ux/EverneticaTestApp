import styled from "styled-components";
import {Button} from "@mui/material";

const Wrapper = styled.div`
  margin-left: 2rem;
`;

const SearchButton = styled(Button)`
  height: 3.5rem;
  color: white !important;
  border-color: white !important;
  &:hover {
    color: orange !important;
  }
`


export const ResetSearch = () => {
    return (
        <Wrapper>
            <SearchButton variant="outlined">Reset Search</SearchButton>
        </Wrapper>
    )
}