import Head from "next/head";
import {Footer, Header} from "./";

export const Layout = ({children, title = '', description = ''}) => {
    return (
        <>
            <Head>
                <title>{`GuitarLA - ${title}`}</title>
                <meta name="description" content={`${description}`}/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            <Header />

            {children}

            <Footer />
        </>
    );
};


