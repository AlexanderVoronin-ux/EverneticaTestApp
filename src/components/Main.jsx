import styled from "styled-components";
import {Container} from "./Header/Container";

const Wrapper = styled.main`
  padding: 2rem 0;
  background-color: gray;
  min-height: 100vh;

`;

export const Main = ({children}) => {
    return (
        <Wrapper>
            <Container>
                {children}
            </Container>
        </Wrapper>
    )
}