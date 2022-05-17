import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import styled from "styled-components";

export type Loader = {
  src: string;
  width: number;
  quality: number;
};

const myLoader = ({ src, width, quality }: Loader) => {
  return `https://nextjs.org/${src}?&w=${width}&q=${quality}`;
};

const IMAGE = [
  {
    id: 1,
    title: "twitch",
    loader: myLoader,
    src: "_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ftwitch.5e75fd8c.jpg",
    alt: "picture",
    width: 500,
    height: 500,
    quality: 75,
    link: "https://m.twitch.tv",
    tag: ["/#entertainment"],
  },
  {
    id: 2,
    title: "netflix jobs",
    loader: myLoader,
    src: "_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fshowcases-02.983de4fa.jpg",
    alt: "picture",
    width: 500,
    height: 500,
    quality: 75,
    link: "https://jobs.netflix.com",
    tag: ["/#entertainment"],
  },
  {
    id: 3,
    title: "github",
    loader: myLoader,
    src: "_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fgithub.1a84a558.jpg",
    alt: "picture",
    width: 500,
    height: 500,
    quality: 75,
    link: "https://copilot.github.com",
    tag: ["/#creative"],
  },
  {
    id: 4,
    title: "hulu",
    loader: myLoader,
    src: "_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fshowcases-17.0f2b1794.jpg",
    alt: "picture",
    width: 500,
    height: 500,
    quality: 75,
    link: "https://www.hulu.com/welcome",
    tag: ["/#entertainment"],
  },
  {
    id: 5,
    title: "nike",
    loader: myLoader,
    src: "_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fnike.509ec268.jpg",
    alt: "picture",
    width: 500,
    height: 500,
    quality: 75,
    link: "https://www.nike.com/help",
  },
  {
    id: 6,
    title: "realtor",
    loader: myLoader,
    src: "_next/image?url=%2F_next%2Fstatic%2Fmedia%2Frealtor.7234df5f.jpg",
    alt: "picture",
    width: 500,
    height: 500,
    quality: 75,
    link: "https://www.realtor.com",
    tag: ["/#e-commerce", "/#marketing"],
  },
  {
    id: 7,
    title: "att",
    loader: myLoader,
    src: "_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fatt.1f25011a.jpg",
    alt: "picture",
    width: 500,
    height: 500,
    quality: 75,
    link: "https://www.att.com",
    tag: ["/#e-commerce", "/#entertainment", "/#marketing"],
  },
  {
    id: 8,
    title: "tencent-news",
    loader: myLoader,
    src: "_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ftencentnews.6ecd300c.jpg",
    alt: "picture",
    width: 500,
    height: 500,
    quality: 75,
    link: "https://xw.qq.com",
    tag: ["/#news"],
  },
];

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  margin: 0 auto;
  padding: 0 0;
  text-align: center;
  background-color: #fafafa;
  border-top: 1px solid #eaeaea;
  border-bottom: 1px solid #eaeaea;
  overflow: hidden;
`;

const StyledDiv = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  width: 100%;
  max-width: 1024px;
  margin: 0 auto;
  align-items: center;
`;

const WrapperText = styled.div`
  width: 100%;
  padding: 1.5rem;
  background: rgba(0, 0, 0, 0.8);
  transition: opacity.6s ease;
  opacity: 1;
  flex-direction: column;
  text-align: center;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
`;

const StyledImage = styled.article`
  position: relative;
  margin: 20px;
  &:hover {
    cursor: zoom-in;
    position: relative;
  }
`;

const HoverImg = styled.div`
  &:hover {
    opacity: 0.5;
  }
`;

const ImgText = styled.h1`
  font-size: 1.423828125em;
  color: white;
  line-height: 29px;
`;

const StyledA = styled.a`
  text-align: center;
  margin-bottom: auto;
  color: blue;
`;

export default function MMain() {
  const router = useRouter();
  const asPath = router.asPath;
  let value = asPath;

  const [hoveringIdx, setHoveringIdx] = useState<number | null>(null);

  return (
    <Wrapper>
      <StyledDiv>
        {(value === "/#all" || value === "/") && (
          <>
            {IMAGE.map(
              (
                { id, title, loader, src, alt, width, height, quality, link },
                index
              ) => (
                <StyledImage
                  key={id}
                  onMouseEnter={() => setHoveringIdx(index)}
                  onMouseLeave={() => setHoveringIdx(null)}
                >
                  <Link href={`https://nextjs.org/showcase/${title}`} passHref>
                    <a>
                      <Image
                        loader={loader}
                        src={src}
                        alt={alt}
                        width={width}
                        height={height}
                        quality={quality}
                        href={`https://nextjs.org/showcase/${title}`}
                        style={{
                          opacity: hoveringIdx === index ? 0.5 : 1,
                          transition: "all .5s",
                        }}
                      />
                      <WrapperText
                        style={{
                          opacity: hoveringIdx === index ? 1 : 0,
                          transition: "all .5s",
                        }}
                      >
                        <ImgText>{title}</ImgText>
                        <Link href={`${link}`} passHref>
                          <StyledA>{link}</StyledA>
                        </Link>
                      </WrapperText>
                    </a>
                  </Link>
                </StyledImage>
              )
            )}
          </>
        )}
      </StyledDiv>
    </Wrapper>
  );
}
