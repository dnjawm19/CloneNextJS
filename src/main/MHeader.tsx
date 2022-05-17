import styled from "styled-components"

const StyledDiv = styled.div`
    display: flex;
    padding: 32px 0 0;
    flex-direction: column;
    align-items: center;
`

const StyledH2 = styled.h2`
    font-size: 2rem;
    letter-spacing: -1px;
    margin-bottom: 1rem;
    line-height: 1.3;
`

const StyledH3 = styled.h3`
    font-size: 1rem;
    font-weight: 400;
    color: #696969;
`

export default function MHeader() {
    
    return (
        <StyledDiv>
            <StyledH2>
                Showcase
            </StyledH2>
            <StyledH3>
                Meet hundreds of beautiful websites built with Next.js by Vercel
            </StyledH3>
        </StyledDiv>
    )
}