import styled from "styled-components";

const StyledFooter = styled.footer`
    width: 100vw;
    padding: 40px;
    @media only screen and (max-width: 828px) {
    padding: 16px;
    }
`;

const Wrapper = styled.div`
    display: flex;
    flex=direction: row;
`

const MiddleWrapper = styled.div`
    flex-direction: column;
    padding: 40px;
`

const StyledDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

export default function Footer() {

    return (
        <StyledFooter>
            <Wrapper>
                <MiddleWrapper>
                    <strong>General resources</strong>
                    <p>Docs</p>
                    <p>Learn</p>
                </MiddleWrapper>
                <MiddleWrapper>

                </MiddleWrapper>
                <MiddleWrapper>

                </MiddleWrapper>
                <MiddleWrapper>
                    <strong>Legal</strong>
                    <p>Privacy Policy</p>
                </MiddleWrapper>
            </Wrapper>
            <div>
                Vercel
            </div>
            <StyledDiv>
                Copyright © 2022 Vercel, Inc. All rights reserved.
            </StyledDiv>
        </StyledFooter>
    )
}