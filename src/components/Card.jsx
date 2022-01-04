import styled from "styled-components";

const Wrapper = styled.article``;

const CardImage = styled.img``;

const CardBody = styled.div``;

const CardTitle = styled.h3``;

const CardText = styled.p``;

export const Card = ({img, name, code, onClick}) => {
    return (
        <Wrapper onClick={onClick}>
            <CardImage/>
            <CardBody>
                <CardTitle>{name}</CardTitle>
                <CardText>{code}</CardText>
            </CardBody>
        </Wrapper>
    )
}