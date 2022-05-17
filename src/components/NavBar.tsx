import Link from "next/link"
import { useEffect, useState } from "react"
import styled from "styled-components"
import GitHubIcon from "../assets/github.svg";
import NextjsIcon from "../assets/nextjs.svg";

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
    align-items: center;
`

const StyledLink = styled.a`
    padding : 2rem;
    color: #696969;
    justify-content: space-between;
    font-size: 14px;
    text-decoration: none;
    transition: color .2s ease;
    margin-left: 1rem;
`

const LinkLearn = styled.a`
    background-color: rgba(0,118,255,.9);
    border: 1px solid rgba(0,118,255,.9);
    border-radius: 7px;
    color: #fff;
    padding: 4px 16px;
    margin: 0;
    font-weight: 500;
`

const StyledDiv = styled.div`
    justify-content: space-between;
    padding: 0 1rem;
`

const GitHubSvg = styled(GitHubIcon)`
    width: 22px;
    height: 22px;
    cursor: pointer;
`

const NextJsSvg = styled(NextjsIcon)`
    width: 82px;
    height: 40px;
    cursor: pointer;
`

export default function NavBar() {

    const [scroll,setScroll] = useState(0);
    const [sweep, setSweep] = useState(0);

    function handleScroll() {
        setScroll(window.pageYOffset);

        if(scroll > 50 && scroll < 200) {
            setSweep(1);
        }
        if(scroll >= 200) {
            setSweep(2);
        } else {
            setSweep(0);
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
    padding: 0 1rem;
    border-bottom: ${sweep === 2 ? "" : "1px solid gray"};
    z-index: 1;
    background: white;
    align-items: center;

    position: sticky;
    top: 0;
`

    return (
        <Wrapper>
            <Nav>
                <Link href="https://nextjs.org/" passHref>
                    <NextJsSvg />
                </Link>
                <div>
                    {NAV_LINK.map(({id, href, name}) => (
                        <Link key={id}  href={href} passHref>
                            <StyledLink>{name}</StyledLink>
                        </Link>
                    ))}
                </div>
                <StyledDiv>
                    <Link href="https://nextjs.org/learn/foundations/about-nextjs?utm_source=next-site&utm_medium=nav-cta&utm_campaign=next-website" passHref>
                        <LinkLearn>Learn</LinkLearn>
                    </Link>
                    <Link href="https://github.com/vercel/next.js" passHref>
                        <GitHubSvg />
                    </Link>
                </StyledDiv>
            </Nav>
        </Wrapper>
    )
}