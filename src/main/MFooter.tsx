import styled from "styled-components";
import Link from "next/link";
import MBackToTop from "./MBackToTop";

const Wrapper = styled.div`
    display: flex;
    padding: 50px;
    align-items: center;
    flex-direction: column;
    background: lightblue;
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
            <MBackToTop />
            <Link href="https://github.com/vercel/next.js/discussions/10640" passHref>
                <StyledLink>Share Your Website (Heart)</StyledLink>
            </Link>
        </Wrapper>
    )
}