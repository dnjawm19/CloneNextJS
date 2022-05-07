import Link from "next/link"
import { useEffect, useState } from "react"
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
    display: flex;
    width: 100%;
    max-width: 1024px;
    margin: 0 auto;
    position: relative;
    flex: 1 1;
    justify-content: space-between;
`

const StyledLink = styled.a`
    padding : 2rem;
    color: black;
    justify-content: space-between;
`

export default function NavBar() {

    const [scroll,setScroll] = useState(0);
    const [sweep, setSweep] = useState(false);

    function handleScroll() {
        setScroll(window.pageYOffset);

        if(scroll > 50) {
            setSweep(true);
        } else {
            setSweep(false);
        }
    };
    
    useEffect(() => {
        console.log("ScrollY is ", scroll);
    }, [scroll]);
    
    useEffect(() => {
        const watch = () => {
            window.addEventListener('scroll', handleScroll);
        }
        watch();
        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    })

    const Wrapper = styled.div`
    display: flex;
    width: 100%;
    height: 80px;
    border-bottom: 1px solid gray;
    z-index: 1;
    background: white;
    align-items: center;

    position: ${sweep ===true ? "fixed" : "relative"};
`

    return (
        <Wrapper>
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
        </Wrapper>
    )
}