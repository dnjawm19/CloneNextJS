import styled from "styled-components";
import Link from "next/link";

const Wrapper = styled.div`
    display: flex;
    border-radius: 100%;
    align-items: center;
    flex-direction: column;
`

const StyledP = styled.p`
    bottom: 12px;
    height: 40px;
    color: blue;
`

const StyledLink = styled.a`
    margin: 0;
    padding: 0 3.5rem;
    height: 2.81rem;
    line-height: 2.8rem;
    -webkit-border-radius: 7px;
    -moz-border-radius: 7px;
    border-radius: 7px;
    background-color: #0070f3;
    -webkit-box-shadow: 0 4px 14px 0 rgb(0 118 255 / 39%);
    -moz-box-shadow: 0 4px 14px 0 rgba(0,118,255,.39);
    box-shadow: 0 4px 14px 0 rgb(0 118 255 / 39%);
    color: white;
`

export default function MFooter() {

    return(
        <Wrapper>
            <StyledP>
                Back to Top
            </StyledP>
            <Link href="https://github.com/vercel/next.js/discussions/10640" passHref>
                <StyledLink>Share Your Website (Heart)</StyledLink>
            </Link>
        </Wrapper>
    )
}