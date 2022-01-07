import React, {FC} from 'react'
import {StyledAppContainer, StyledBackground, StyledContainer, StyledHeader, StyledProgressbar} from "./style";
import {CircularProgress} from "@mui/material";


const Main: FC = props => {

    const status = 'succeed'

    return (
        <StyledAppContainer>
            <StyledHeader>
                {/*<div>*/}
                {/*    Header*/}
                {/*</div>*/}
                <StyledBackground>
                    <StyledContainer>
                        {
                            status !== 'succeed'
                            ? <StyledProgressbar>
                                <CircularProgress size={75} color={"inherit"}/>
                            </StyledProgressbar>
                            : props.children
                        }
                    </StyledContainer>
                </StyledBackground>
            </StyledHeader>
        </StyledAppContainer>)
}

export default Main
