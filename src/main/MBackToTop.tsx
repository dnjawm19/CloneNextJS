import { useEffect, useState } from "react"
import styled from "styled-components";
import Up from "../assets/up.svg";


function handleTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

const StyledDiv = styled.div`
    bottom: 12px;
    height: 40px;
    cursor: pointer;
    font-size: 14px;
    line-height: inherit;
    border-radius: 7px;
    color: #0070f3;
    background-color: transparent;
    border: none;
`

const StyledP = styled.p`
    font-size: 16px;
    font-weight: 400;
`

const UpSvg = styled(Up)`
    weight: 12px;
    height: 8px;
`

export default function MBackToTop() {

    return (
        <StyledDiv onClick={handleTop}>
            <StyledP>
                {`Back to top `}
                <UpSvg />
            </StyledP>
        </StyledDiv>
    )
}