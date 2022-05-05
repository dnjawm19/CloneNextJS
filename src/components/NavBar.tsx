import Link from "next/link"
import styled from "styled-components"

const NAV_LINK = [
    {
        id: 1,
        href: '/',
        name: 'Showcase',
    },
    {
        id: 2,
        href: 'https://nextjs.org/docs',
        name: 'Docs'
    },
    {
        id: 3,
        href: 'https://nextjs.org/blog',
        name: 'Blog'
    },
    {
        id: 4,
        href: 'https://nextjs.org/analytics',
        name: 'Analytics'
    },
    {
        id: 5,
        href: 'https://nextjs.org/examples',
        name: 'Examples'
    },
    {
        id: 6,
        href: 'https://vercel.com/contact/sales?utm_source=next-site&utm_medium=navbar&utm_campaign=next-website',
        name: 'Enterprise'
    }
]

const Nav = styled.nav`
    height: 80px;
    display: flex;
    position: relative;
    flex: 1 1;
    align-items: center;
    justify-content: space-between;
`

const StyledLink = styled.a`
    padding : 2rem;
    color: black;
    justify-content: space-between;
`

export default function NavBar() {

    return (
        <Nav>
            <Link href="https://nextjs.org/" passHref>
                <a>NEXT.JS</a>
            </Link>
            <div>
                {NAV_LINK.map(({id, href, name}) => (
                    <Link key={id}  href={href} passHref>
                        <StyledLink>{name}</StyledLink>
                    </Link>
                ))}
            </div>
            <div>
                <Link href="https://nextjs.org/learn/foundations/about-nextjs?utm_source=next-site&utm_medium=nav-cta&utm_campaign=next-website" passHref>
                    <StyledLink>Learn</StyledLink>
                </Link>
                <Link href="https://github.com/vercel/next.js" passHref>
                    <StyledLink>git</StyledLink>
                </Link>
            </div>
        </Nav>
    )
}