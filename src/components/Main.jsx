import styled from "styled-components";
import {Container} from "./Header/Container";
import {HTML5Backend} from "react-dnd-html5-backend";
import {DndProvider} from "react-dnd";


const Wrapper = styled.main`
  padding: 2rem 0;
  background-color: gray;
  min-height: 100vh;
`;

export const Main = ({children}) => {
    return (
        <DndProvider backend={HTML5Backend}>
            <Wrapper>
                <Container>
                    {children}
                </Container>
            </Wrapper>
        </DndProvider>
    )
}