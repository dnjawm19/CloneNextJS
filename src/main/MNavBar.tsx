import Link from "next/link"
import styled from "styled-components"

const NAV_LINK = [
    {
        id: 1,
        href: '#all',
        name: 'ALL',
    },
    {
        id: 2,
        href: '#finance',
        name: 'FINANCE'
    },
    {
        id: 3,
        href: '#news',
        name: 'NEWS'
    },
    {
        id: 4,
        href: '#e-commerce',
        name: 'E-COMMERCE'
    },
    {
        id: 5,
        href: '#travel',
        name: 'TRAVEL'
    },
    {
        id: 6,
        href: '#creative',
        name: 'CREATIVE'
    },
    {
        id: 7,
        href: '#entertainment',
        name: 'ENTERTAINMENT'
    },
    {
        id: 8,
        href: '#marketing',
        name: 'MARKETING'
    },
    {
        id: 9,
        href: 'https://github.com/vercel/next.js/discussions/10640',
        name: 'Heart'
    }
]

const Nav = styled.nav`
    display: flex;
    height: 80px;
    justify-content: space-between;
    align-items: center;
`

const StyledLink = styled.a`
    padding : 2rem;
    color: black;
`

export default function MNavBar() {

    return (
        <Nav>
            {NAV_LINK.map(({id, href, name}) => (
                <Link key={id}  href={href} passHref>
                    <StyledLink>{name}</StyledLink>
                </Link>
            ))}
        </Nav>
    )
}