import styled from 'styled-components'
import {Container} from "./Container";
import SearchInput from "./SearchInput";
import {ResetSearch} from "./ResetSearch";

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

const Title = styled.a.attrs({
    href: '/',
})`
  color: orange;
  text-decoration: none;
  font-size: 24px;

  &:hover {
    color: white;
  }
`;
const Search = styled(SearchInput)`
  flex-grow: 1`;

export const Header = () => {
    return (
        <>
            <HeaderEl>
                <Container>
                    <Wrapper>
                        <Title>Country Search</Title>
                    </Wrapper>
                    <Wrapper1>
                        <Search/>
                        <ResetSearch />
                    </Wrapper1>
                </Container>
            </HeaderEl>
        </>
    )
}
