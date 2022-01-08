import styled from "styled-components";
import {Box, CardMedia, ListItemText, Paper} from "@mui/material";
import {useDrag, useDrop} from "react-dnd";
import {ItemTypes} from "../components/TypeDnD";
import {useRef} from "react";


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

export const Card = ({img, name, code, capital, onClick, index, moveCard}) => {

    const ref = useRef(null);
    const [{ isDragging }, drag] = useDrag(() => ({
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
                console.log("item", item)
                const dragIndex = item.index;
                const hoverIndex = index;
                // Don't replace items with themselves
                if (dragIndex === hoverIndex) {
                    return;
                }
                // Determine rectangle on screen
                const hoverBoundingRect = ref.current?.getBoundingClientRect();
                // Get vertical middle
                const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
                // Determine mouse position
                const clientOffset = monitor.getClientOffset();
                // Get pixels to the top
                const hoverClientY = clientOffset.y - hoverBoundingRect.top;
                // Only perform the move when the mouse has crossed half of the items height
                // When dragging downwards, only move when the cursor is below 50%
                // When dragging upwards, only move when the cursor is above 50%
                // Dragging downwards
                if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
                    return;
                }
                // Dragging upwards
                if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
                    return;
                }
                // Time to actually perform the action
                moveCard(dragIndex, hoverIndex);
                // Note: we're mutating the monitor item here!
                // Generally it's better to avoid mutations,
                // but it's good here for the sake of performance
                // to avoid expensive index searches.
                item.index = hoverIndex;
            },
        }))


    drag(drop(ref));

    return (
        <Box ref={ref} onClick={onClick} data-handler-id={handlerId}
             sx={{
                 display: 'flex',
                 flexWrap: 'wrap',
                 '& > :not(style)': {
                     width: "100%",
                     // backgroundColor: isOver? "red": "black"
                     backgroundColor: "black",
                     opacity: isDragging? "0": "1"
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