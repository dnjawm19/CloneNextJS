import Link from "next/link"
import { useEffect, useState } from "react";
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
];

const Nav = styled.nav`
    display: flex;
    height: 49px;
    max-width: 1024px;
    padding: 10px;
    margin: 0 auto;
    justify-content: space-between;
`

const StyledLink = styled.a`
    height: 32px;
    padding : 0 20px;
    color: black;
`

export default function MNavBar() {


    const [scroll,setScroll] = useState(0);
    const [sweep, setSweep] = useState(false);

    function handleScroll() {
        setScroll(window.pageYOffset);

        if(scroll > 200) {
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
    z-index: 1;
    background: white;
    align-items: center;

    position: ${sweep ===true ? "fixed" : "relative"};
    top: ${sweep ===true ? "80px" : 0};
`

    return (
        <Wrapper>
        <Nav>
            {NAV_LINK.map(({id, href, name}) => (
                <Link key={id}  href={href} passHref>
                    <StyledLink>{name}</StyledLink>
                </Link>
            ))}
        </Nav>
        </Wrapper>
    )
}