import React from "react";
import {StyledEntryCard} from "./EntryCard.styles"


function EntryCard ({children}) {
    
    return(
        <StyledEntryCard>
            {children}
        </StyledEntryCard>
    );
}

export default EntryCard;