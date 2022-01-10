import React, {FC} from 'react'
import {StyledBox, StyledTextfield} from './style'

const ContentFilling: FC = props => {
    return (
        <StyledBox>
            <StyledTextfield>
                You need to use your personal API-key, which you can get in your GW2 account.
                Next step you need to log in using this API-key. After that you can use all armory tools
                and check your characters, achievements, inventory, storage, builds and current armor
                which equipped on selected character.
            </StyledTextfield>
        </StyledBox>
    )
}

export default ContentFilling
