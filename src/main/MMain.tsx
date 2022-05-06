import Image from "next/image";
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
        loader: myLoader,
        src: "_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fshowcases-02.983de4fa.jpg",
        alt: "picture",
        width: 500,
        height: 500,
        quality: 75
    },
    {
        id: 2,
        loader: myLoader,
        src: "_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ftwitch.5e75fd8c.jpg",
        alt: "picture",
        width: 500,
        height: 500,
        quality: 75
    },
    {
        id: 3,
        loader: myLoader,
        src: "_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fgithub.1a84a558.jpg",
        alt: "picture",
        width: 500,
        height: 500,
        quality: 75
    },
    {
        id: 4,
        loader: myLoader,
        src: "_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fshowcases-17.0f2b1794.jpg",
        alt: "picture",
        width: 500,
        height: 500,
        quality: 75
    },
    {
        id: 5,
        loader: myLoader,
        src: "_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fnike.509ec268.jpg",
        alt: "picture",
        width: 500,
        height: 500,
        quality: 75
    },
    {
        id: 6,
        loader: myLoader,
        src: "_next/image?url=%2F_next%2Fstatic%2Fmedia%2Frealtor.7234df5f.jpg",
        alt: "picture",
        width: 500,
        height: 500,
        quality: 75
    },
]

const StyledImage = styled.image`
    margin: 20px;
    
    &:hover {
        background: black;
    }
`

const MyImage = (props: any) => {
    return (
        <div>
            {IMAGE.map(({id, loader, src, alt, width, height, quality}) => (
                <StyledImage key={id}>
                    <Image
                        key= {id}
                        loader= {loader}
                        src= {src}
                        alt= {alt}
                        width= {width}
                        height= {height}
                        quality= {quality}
                    />
                </StyledImage>
            ))}
        </div>
    )
}

export default function MMain() {

    return (
        <div>
            hi
            <MyImage />
        </div>
    )
}