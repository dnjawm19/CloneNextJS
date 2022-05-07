import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";

export type Loader = {
    src: string;
    width: number;
    quality: number;
};

const myLoader = ({src, width, quality}: Loader) => {
    return `https://nextjs.org/${src}?&w=${width}&q=${quality}`
}

const IMAGE = [
    {
        id: 1,
        title: "twitch",
        loader: myLoader,
        src: "_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ftwitch.5e75fd8c.jpg",
        alt: "picture",
        width: 500,
        height: 500,
        quality: 75
    },
    {
        id: 2,
        title: "netflix jobs",
        loader: myLoader,
        src: "_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fshowcases-02.983de4fa.jpg",
        alt: "picture",
        width: 500,
        height: 500,
        quality: 75
    },
    {
        id: 3,
        title: "github",
        loader: myLoader,
        src: "_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fgithub.1a84a558.jpg",
        alt: "picture",
        width: 500,
        height: 500,
        quality: 75
    },
    {
        id: 4,
        title: "hulu",
        loader: myLoader,
        src: "_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fshowcases-17.0f2b1794.jpg",
        alt: "picture",
        width: 500,
        height: 500,
        quality: 75
    },
    {
        id: 5,
        title: "nike",
        loader: myLoader,
        src: "_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fnike.509ec268.jpg",
        alt: "picture",
        width: 500,
        height: 500,
        quality: 75
    },
    {
        id: 6,
        title: "realtor",
        loader: myLoader,
        src: "_next/image?url=%2F_next%2Fstatic%2Fmedia%2Frealtor.7234df5f.jpg",
        alt: "picture",
        width: 500,
        height: 500,
        quality: 75
    },
    {
        id: 7,
        title: "att",
        loader: myLoader,
        src: "_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fatt.1f25011a.jpg",
        alt: "picture",
        width: 500,
        height: 500,
        quality: 75
    },
    {
        id: 8,
        title: "tencent-news",
        loader: myLoader,
        src: "_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ftencentnews.6ecd300c.jpg",
        alt: "picture",
        width: 500,
        height: 500,
        quality: 75
    },
]

const Wrapper = styled.div`
    display: flex;
    width: 100%;
    background: lightblue;
`

const StyledDiv = styled.div`
    display: grid;
    grid-template-columns: auto auto auto;
    width: 100%;
    max-width: 1024px;
    margin: 0 auto;
    align-items: center;
`

const StyledImage = styled.image`
    margin: 20px;
    
    &:hover {
        background: black;
        cursor: zoom-in;
    }
`

const MyImage = (props: any) => {
    return (
        <Wrapper>
            <StyledDiv>
                {IMAGE.map(({id, title, loader, src, alt, width, height, quality}) => (
                    <Link
                    key= {id}
                    href={`https://nextjs.org/showcase/${title}`}
                    passHref
                    >
                        <StyledImage>
                            <Image
                                loader= {loader}
                                src= {src}
                                alt= {alt}
                                width= {width}
                                height= {height}
                                quality= {quality}
                                href={`https://nextjs.org/showcase/${title}`}
                            />
                        </StyledImage>
                    </Link>
                ))}
            </StyledDiv>
        </Wrapper>
    )
}

export default function MMain() {

    return (
        <div>
            <MyImage />
        </div>
    )
}