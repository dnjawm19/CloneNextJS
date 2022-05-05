import Link from "next/link"
import styled from "styled-components"

const Wrapper = styled.div`
    display: flex;
    width: 100%;
    margin: 0 auto;
    padding: 0 1rem;
    justify-content: space-between;
    align-items: center;
    height: 40px;
    background: black;
    color: white;
`

export default function Header() {

    return (
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
    )
}