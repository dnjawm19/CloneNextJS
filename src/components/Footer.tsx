import styled from "styled-components";

const MainWrapper = styled.div`
    display: flex;
    width: 100%;
    padding: 50px;
    border-top: 1px solid gray;
    background: lightblue;
`

const StyledFooter = styled.footer`
    display: flex;
    width: 100%;
    max-width: 1024px;
    margin: 0 auto;
    flex-direction: column;
`;

const Wrapper = styled.div`
    display: flex;
    flex=direction: row;
`

const MiddleWrapper = styled.div`
    flex-direction: column;
    padding: 0 10px 10px 0;
`

const StyledDiv = styled.div`
    display: flex;
    padding-top: 10px;
`

export default function Footer() {

    return (
        <MainWrapper>
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
        </MainWrapper>
    )
}