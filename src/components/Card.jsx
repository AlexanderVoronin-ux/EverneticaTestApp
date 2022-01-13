import styled from "styled-components";
import {Box, CardMedia, ListItemText, Paper} from "@mui/material";
import {useDrag, useDrop} from "react-dnd";
import {ItemTypes} from "../components/TypeDnD";
import {useRef, useState} from "react";
import CheckboxInput from "./CheckBoxInput";
import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";


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
  width: 100%;
  height: 150px;
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

export const Card = ({item ,img, name, code, capital, onClick, index, moveCard}) => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const addCountryDataItem = useSelector(s => s.addCountryDataItem);
    const [showInput, setShowInput] = useState(false);
    const [inputCheck, setInputCheck] = useState(false);
    const isSelected = true;

    const handleMouseOver = e => {
       setShowInput(true)
    }
    const handleMouseLeave = e => {
       setShowInput(false)
    }

    const HandleChange = () => {
        inputCheck ? setInputCheck(false) : setInputCheck(true)
        if (!addCountryDataItem.includes(item))
        dispatch({type:"ADD_SEARCH_COUNTRY_ITEM", payload: {...item, isSelected}})
    }

    const ref = useRef(null);
    const [{isDragging}, drag] = useDrag(() => ({
        type: ItemTypes.Card,
        item: {index, type: ItemTypes.Card},
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging(),
        }),
    }))

    const [{handlerId}, drop] = useDrop(
        () => ({
            accept: ItemTypes.Card,
            collect: (monitor) => ({
                isOver: !!monitor.isOver(),
                handlerId: monitor.getHandlerId(),
            }),
            hover(item, monitor) {
                if (!ref.current) {
                    return;
                }
                const dragIndex = item.index;
                const hoverIndex = index;
                if (dragIndex === hoverIndex) {
                    return;
                }
                const hoverBoundingRect = ref.current?.getBoundingClientRect();
                const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
                const clientOffset = monitor.getClientOffset();
                const hoverClientY = clientOffset.y - hoverBoundingRect.top;
                if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
                    return;
                }
                if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
                    return;
                }
                moveCard(dragIndex, hoverIndex);
                item.index = hoverIndex;
            },
        }))


    drag(drop(ref));

    return (
        <Box ref={ref}
             onClick={onClick}
             data-handler-id={handlerId}
             onMouseOver={handleMouseOver}
             onMouseLeave={handleMouseLeave}
             sx={{
                 display: 'flex',
                 flexWrap: 'wrap',
                 '& > :not(style)': {
                     width: "100%",
                     backgroundColor: "black",
                     opacity: isDragging ? "0" : "1"
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
                        {showInput && <CheckboxInput value={inputCheck} onChange={HandleChange} label="label" />}
                    </TextWrapper>

                </Wrapper>
            </Paper>
        </Box>

    )
}