import React, {FC} from 'react'
import {CircularProgress} from "@mui/material";
import {StyledProgressbar} from "./style";

type OwnPropertyType = {}

const Loading: FC<OwnPropertyType> = () => {
    return (
        <StyledProgressbar>
            <CircularProgress size={75} color={"inherit"}/>
        </StyledProgressbar>
    )
}

export default Loading
