import Link from "next/link";
import styled from "styled-components";
import VerCel2 from "../assets/vercel2.svg";

const GENERAL_RESOURCES = [
  {
    id: 1,
    name: "Docs",
    src: "https://nextjs.org/docs",
  },
  {
    id: 2,
    name: "Learn",
    src: "https://nextjs.org/learn/foundations/about-nextjs",
  },
  {
    id: 3,
    name: "Showcase",
    src: "https://nextjs.org/showcase",
  },
  {
    id: 4,
    name: "Blog",
    src: "https://nextjs.org/blog",
  },
  {
    id: 5,
    name: "Analytics",
    src: "https://nextjs.org/analytics",
  },
  {
    id: 6,
    name: "Next.js Conf",
    src: "https://nextjs.org/conf",
  },
  {
    id: 7,
    name: "Live",
    src: "https://vercel.com/live",
  },
];

const MORE = [
  {
    id: 1,
    name: "Commerce",
    src: "https://nextjs.org/commerce",
  },
  {
    id: 2,
    name: "Contact Sales",
    src: "https://vercel.com/contact/sales?utm_source=next-site&utm_medium=footer&utm_campaign=next-website",
  },
  {
    id: 3,
    name: "GitHub",
    src: "https://github.com/vercel/next.js",
  },
  {
    id: 4,
    name: "Releases",
    src: "https://github.com/vercel/next.js/releases",
  },
  {
    id: 5,
    name: "Telemetry",
    src: "https://nextjs.org/telemetry",
  },
];

const ABOUT_VERCEL = [
  {
    id: 1,
    name: "Open Source Software",
    src: "https://vercel.com/oss?utm_source=next-site&utm_medium=footer&utm_campaign=next-website",
  },
  {
    id: 2,
    name: "GitHub",
    src: "https://github.com/vercel",
  },
  {
    id: 3,
    name: "Twitter",
    src: "https://twitter.com/vercel",
  },
];

const LEGAL = [
  {
    id: 1,
    name: "Privacy Policy",
    src: "https://vercel.com/legal/privacy-policy",
  },
];

const MainWrapper = styled.div`
  padding: 0 2rem;
  width: 100%;
  margin: 0 auto;
  max-width: 1024px;
`;

const StyledFooter = styled.footer`
  width: 100%;
  max-width: 1024px;
  margin: 0 auto;
  flex-direction: column;
  padding: 2rem 0 4rem;
  min-height: 400px;
`;

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  flex=direction: row;
`;

const MiddleWrapper = styled.div`
  flex-direction: column;
  min-width: 320px;
  padding: 0 10px 10px 0;
`;

const StyledDiv = styled.div`
  display: flex;
  font-size: 0.7901234567901234em;
  margin-top: 0.5rem;
  color: #8c8c8c;
`;

const StyledH4 = styled.h4`
  font-weight: 500;
`;

const StyledP = styled.p`
  color: #8c8c8c;
  cursor: pointer;
`;

const VerCel2Svg = styled(VerCel2)`
  weight: 88.44px;
  height: 20px;
  cursor: pointer;
`;

export default function Footer() {
  return (
    <MainWrapper>
      <StyledFooter>
        <Wrapper>
          <MiddleWrapper>
            <StyledH4>General resources</StyledH4>
            {GENERAL_RESOURCES.map(({ id, name, src }) => (
              <Link href={`${src}`} passHref key={id}>
                <StyledP>{name}</StyledP>
              </Link>
            ))}
          </MiddleWrapper>
          <MiddleWrapper>
            <StyledH4>More</StyledH4>
            {MORE.map(({ id, name, src }) => (
              <Link href={`${src}`} passHref key={id}>
                <StyledP>{name}</StyledP>
              </Link>
            ))}
          </MiddleWrapper>
          <MiddleWrapper>
            <StyledH4>About Vercel</StyledH4>
            {ABOUT_VERCEL.map(({ id, name, src }) => (
              <Link href={`${src}`} passHref key={id}>
                <StyledP>{name}</StyledP>
              </Link>
            ))}
          </MiddleWrapper>
          <MiddleWrapper>
            <StyledH4>Legal</StyledH4>
            {LEGAL.map(({ id, name, src }) => (
              <Link href={`${src}`} passHref key={id}>
                <StyledP>{name}</StyledP>
              </Link>
            ))}
          </MiddleWrapper>
        </Wrapper>
        <Link
          href={`https://vercel.com/home?utm_source=next-site&utm_medium=footer&utm_campaign=next-website`}
          passHref
        >
          <VerCel2Svg />
        </Link>
        <StyledDiv>
          Copyright © 2022 Vercel, Inc. All rights reserved.
        </StyledDiv>
      </StyledFooter>
    </MainWrapper>
  );
}
