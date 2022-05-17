import Link from "next/link";
import styled from "styled-components";
import VerCel from "../assets/vercel.svg";

const MainWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 50px;
  align-items: center;
  background: black;
`;

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  max-width: 1024px;
  margin: 0 auto;
  padding: 0 1rem;
  justify-content: space-between;
  align-items: center;
  color: white;
`;

const VercelSvg = styled(VerCel)`
  weight: 88.35px;
  height: 20px;
  cursor: pointer;
`;

const StyledB = styled.b`
  font-weight: bold;
`;

export default function Header() {
  return (
    <MainWrapper>
      <Wrapper>
        <Link
          href="https://vercel.com/home?utm_source=next-site&utm_medium=banner&utm_campaign=next-website"
          passHref
        >
          <VercelSvg />
        </Link>
        <Link
          href="https://vercel.com/solutions/nextjs?utm_source=next-site&utm_medium=banner&utm_campaign=next-website"
          passHref
        >
          <a>
            Deploy
            <StyledB> Next.js </StyledB>
            in seconds →
          </a>
        </Link>
      </Wrapper>
    </MainWrapper>
  );
}
