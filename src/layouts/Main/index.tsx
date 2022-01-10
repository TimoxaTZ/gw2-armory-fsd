import React, {FC} from 'react'
import {StyledAppContainer, StyledBackground, StyledContainer, StyledContentBox, StyledProgressbar} from "./style";
import {CircularProgress} from "@mui/material";


const Main: FC = props => {

    const status = 'succeed'

    return (
            <StyledAppContainer>
                <StyledContentBox>
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
                </StyledContentBox>
            </StyledAppContainer>
    )
}

export default Main
