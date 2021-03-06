import React from "react";
import styles from "../../styles/Home.module.css";
import Head from "next/head";
import Button from "../../components/Button/Button";
import Loading from "../../components/Loading/Loading";

function Index(props) {
    return (
        <div className={styles.container}>
            <Head>
                <title>Create Next App</title>
                <meta
                    name="description"
                    content="Generated by create next app"
                />
                <link rel="icon" href="/Logo.ico" />
            </Head>
            
            <main>
                <Loading />
            </main>
        </div>
    );
}

export default Index;
