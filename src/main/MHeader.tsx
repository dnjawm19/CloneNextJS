import styled from "styled-components"

const StyledDiv = styled.div`
    display: flex;
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