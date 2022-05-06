import { useEffect, useState } from "react"
import styled from "styled-components";


function handleTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

const StyledP = styled.p`
    bottom: 12px;
    height: 40px;
    color: blue;
    cursor: pointer;
`

export default function MBackToTop() {

    return (
        <StyledP onClick={handleTop}>
            Back to top
        </StyledP>
    )
}