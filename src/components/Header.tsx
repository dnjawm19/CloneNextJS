import Link from "next/link"
import styled from "styled-components"

const MainWrapper = styled.div`
    display: flex;
    width: 100%;
    height: 50px;
    align-items: center;
    background: black;
`

const Wrapper = styled.div`
    display: flex;
    width: 100%;
    max-width: 1024px;
    margin: 0 auto;
    padding: 0 1rem;
    justify-content: space-between;
    align-items: center;
    color: white;
`

export default function Header() {

    return (
        <MainWrapper>
            <Wrapper>
                <Link href="https://vercel.com/home?utm_source=next-site&utm_medium=banner&utm_campaign=next-website" passHref>
                    <a>Vercel</a>
                </Link>
                <Link href="https://vercel.com/solutions/nextjs?utm_source=next-site&utm_medium=banner&utm_campaign=next-website" passHref>
                    <a>
                        Deploy
                        <strong> Next.js </strong>
                        in seconds
                    </a>
                </Link>
            </Wrapper>
        </MainWrapper>
    )
}