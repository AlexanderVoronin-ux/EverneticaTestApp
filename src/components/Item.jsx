import styled from "styled-components";

const Wrapper = styled.section`
width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 5rem;
`;

export const Item = ({children}) => {
    return (
        <Wrapper>
            {children}
        </Wrapper>
    )
}