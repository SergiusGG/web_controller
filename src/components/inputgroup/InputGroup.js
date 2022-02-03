import React from "react";
import { StyledInputGroup } from "../inputgroup/InputGroup.styles";

function InputGroup({ children }) {

        return(
            <StyledInputGroup>
                {children}
            </StyledInputGroup>
        );
}

export default InputGroup;