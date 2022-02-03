import React from "react";
// import { Children } from "react/cjs/react.production.min";
import {StyledEntryCard} from "./EntryCard.styles"


function EntryCard ({children}) {
    
    return(
        <StyledEntryCard>
            {children}
        </StyledEntryCard>
    );
}

export default EntryCard;