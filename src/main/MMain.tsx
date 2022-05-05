import Image from "next/image";
import styled from "styled-components";

const myLoader = ({src, width, quality}) => {
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

const StyledP = styled.image`
    margin: 20px;
`

const MyImage = (props) => {
    return (
        <div>
            {IMAGE.map(({id, loader, src, alt, width, height, quality}) => (
                <StyledP key={id}>
                    <Image
                        loader= {loader}
                        src= {src}
                        alt= {alt}
                        width= {width}
                        height= {height}
                        quality= {quality}
                    />
                </StyledP>
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