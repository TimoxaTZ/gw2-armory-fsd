import React, {FC} from 'react'
import {StyledAppContainer, StyledBackground, StyledContainer, StyledProgressbar} from "./style";
import {CircularProgress} from "@mui/material";
import { Header } from '../../features/widgets/Header';


const Main: FC = props => {

    const status = 'succeed'

    return (
            <StyledAppContainer>
                <Header.Container/>
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
            </StyledAppContainer>
    )
}

export default Main
