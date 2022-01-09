import * as React from 'react';
import {styled} from '@mui/material/styles';
import DeleteIcon from '@mui/icons-material/Delete';
import {IconButton} from "@mui/material";

const IconDelete = styled(DeleteIcon)`
  color: white;
`


export default function CheckboxInputSearch({onClick}) {
    return (
        <div>
            <IconButton aria-label="delete" onClick={onClick}>
                <IconDelete/>
            </IconButton>
        </div>
    );
}