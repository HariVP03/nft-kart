import React from "react";

import { Layout, FrontpageHero } from "@components";
import Head from "next/head";
import { chakra, Flex } from "@chakra-ui/react";
import NFTCard from "@components/cards";

const Home: React.FC = () => {
    interface CardInput {
        name: string;
        collectionName: string;
        chain: "ETH" | "POLYGON";
        price: number;
        thumbnail: string;
    }

    const cards: Array<CardInput> = [
        {
            chain: "ETH",
            collectionName: "Big Booties",
            name: "Nice #992",
            price: 1,
            thumbnail:
                "https://lh3.googleusercontent.com/o65evReC73CChptsYYmSWeWK5ItxbG3NDqBRiq1bPquhvbpTvJMqKRLEu3_104PUI1pGvdiLSV4koqvCg-8MMR0VvuBiG08xuk53FA=w361",
        },
        {
            chain: "POLYGON",
            collectionName: "Big Boys",
            name: "Nice Boy #4",
            price: 0.09,
            thumbnail:
                "https://lh3.googleusercontent.com/5zdBObz4N1egFhhR2Ag9_TIxTguG-Ihagr722QAEaNElgjoXGJkFUTJOyYd8QZ--eWPuUjcWRNo22TP5SPgjbv0yvrQ-ahZI5O81Kg=w361",
        },
        {
            chain: "ETH",
            collectionName: "Nice Boys",
            name: "Nice Boy But Good #4",
            price: 64,
            thumbnail:
                "https://lh3.googleusercontent.com/5yTcWUviat8MSCuD-5TdgXNgmqPgdHwwDClJv4TXjJG3KvgBD5uV9w7ry5XJKbhgAGOo_0WQO4id4ecnOjPJKUtgD5DGLeglrbh2SkU=w361",
        },
    ];

    return (
        <>
            <Head>
                <title>NFTKart | Sell, Buy and Trade NFTs With Ease</title>
                <link rel="shortcut icon" href="/icons/cart(2).ico" />
            </Head>
            <Layout>
                <FrontpageHero />
                <chakra.h1 mt={5} pl={10} fontSize="3xl" fontWeight="700">
                    Trending Now
                </chakra.h1>
                <Flex mx={1} maxW="100vw" minH="10vh" flexWrap="wrap" mb={5}>
                    {cards.map((e) => (
                        <NFTCard {...e} />
                    ))}
                </Flex>
            </Layout>
        </>
    );
};

export default Home;
