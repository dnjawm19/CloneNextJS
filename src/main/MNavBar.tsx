import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import styled from "styled-components";
import Heart from "../assets/heart.svg";

const NAV_LINK = [
  {
    id: 1,
    href: "#all",
    name: "ALL",
  },
  {
    id: 2,
    href: "#finance",
    name: "FINANCE",
  },
  {
    id: 3,
    href: "#news",
    name: "NEWS",
  },
  {
    id: 4,
    href: "#e-commerce",
    name: "E-COMMERCE",
  },
  {
    id: 5,
    href: "#travel",
    name: "TRAVEL",
  },
  {
    id: 6,
    href: "#creative",
    name: "CREATIVE",
  },
  {
    id: 7,
    href: "#entertainment",
    name: "ENTERTAINMENT",
  },
  {
    id: 8,
    href: "#marketing",
    name: "MARKETING",
  },
];

const Nav = styled.nav`
  display: flex;
  height: 49px;
  max-width: 1024px;
  padding: 10px;
  margin: 0 auto;
  justify-content: space-between;
  align-items: center;
`;

const StyledLink = styled.a`
  background-color: transparent;
  border: none;
  outline: none;
  font-weight: inherit;
  display: inline-block;
  height: 100%;
  line-height: 2rem;
  position: relative;
  text-align: center;
  padding: 0 1.25rem;
  cursor: pointer;
  white-space: nowrap;
  text-transform: uppercase;
  -webkit-border-radius: 7px;
  -moz-border-radius: 7px;
  border-radius: 7px;
  color: #696969;
`;

const HeartSvg = styled(Heart)`
  height: 14px;
  weight: 14px;
  cursor: pointer;
`;

export default function MNavBar() {
  const router = useRouter();
  const { asPath } = router;

  function onclick() {
    console.log(router.asPath);
  }

  const [scroll, setScroll] = useState(0);
  const [sweep, setSweep] = useState(false);

  function handleScroll() {
    setScroll(window.pageYOffset);

    if (scroll > 200) {
      setSweep(true);
    } else {
      setSweep(false);
    }
  }

  useEffect(() => {
    console.log("ScrollY is ", scroll);
  }, [scroll]);

  useEffect(() => {
    const watch = () => {
      window.addEventListener("scroll", handleScroll);
    };
    watch();
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  const Wrapper = styled.div`
    display: flex;
    width: 100%;
    z-index: 1;
    background: white;
    align-items: center;

    position: sticky;
    top: 80px;
  `;

  return (
    <Wrapper>
      <Nav>
        {NAV_LINK.map(({ id, href, name }) => (
          <Link key={id} href={href} passHref>
            <StyledLink>{name}</StyledLink>
          </Link>
        ))}
        <Link
          href={`https://github.com/vercel/next.js/discussions/10640`}
          passHref
        >
          <HeartSvg></HeartSvg>
        </Link>
      </Nav>
    </Wrapper>
  );
}
