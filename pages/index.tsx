import React from "react";

import { Layout, FrontpageHero } from "@components";
import Head from "next/head";

const Home: React.FC = () => {
    return (
        <>
            <Head>
                <title>NFTKart | Sell, Buy and Trade NFTs With Ease</title>
                <link rel="shortcut icon" href="/icons/cart(2).ico" />
            </Head>
            <Layout>
                <FrontpageHero />
            </Layout>
        </>
    );
};

export default Home;
