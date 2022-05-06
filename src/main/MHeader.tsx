import styled from "styled-components"

const StyledDiv = styled.div`
    display: flex;
    height: 147.98px;
    padding: 32px 0 0;
    flex-direction: column;
    align-items: center;
`

const StyledStrong = styled.strong`

`

const StyledP = styled.p`

`

export default function MHeader() {
    
    return (
        <StyledDiv>
            <StyledStrong>
                Showcase
            </StyledStrong>
            <StyledP>
                Meet hundreds of beautiful websites built with Next.js by Vercel
            </StyledP>
        </StyledDiv>
    )
}