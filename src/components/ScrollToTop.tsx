import styled from "styled-components"

const StyledDiv = styled.div`
    position: fixed;
    bottom: 12px
    height: 40px
    border-radius: 100%;
    color: blue;
    align-items: center;    
`

export default function ScrollToTop() {

    return(
        <div>
            <StyledDiv>
                Back to Top
            </StyledDiv>
        </div>
    )
}