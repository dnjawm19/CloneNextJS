import Head from "next/head";

export type title = {
    title: string;
}

export default function Seo({title} : title) {

    return (
        <Head>
            <title>{title}</title>
        </Head>
    )
}