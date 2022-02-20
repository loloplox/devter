import Head from 'next/head'
import styles from '../styles/Home.module.css'
import LogoGithub from "../components/LogoGithub"
import LogoDivtter from "../components/LogoDivtter";
import {loginWithGithub, onAuthStateChange} from "../firebase/client";
import {useEffect, useState} from "react";
import Avatar from "../components/Avatar/Avatar";

export default function Home() {
    const [user, setUser] = useState(undefined)

    function handleClick() {
        loginWithGithub()
    }

    useEffect(() => {
        onAuthStateChange(setUser)
    }, [])

    useEffect(() => {
        console.log(user)
    }, [user])

    return (
        <div className={styles.container}>
            <Head>
                <title>Create Next App</title>
                <meta name="description" content="Generated by create next app"/>
                <link rel="icon" href="/Logo.ico"/>
            </Head>

            <main className={styles.main}>
                <LogoDivtter width={100} height={100}/>
                <h1 className='title'>Bienvenido a Divtter</h1>
                {user === undefined && <span>cargando...</span>}

                {user === null && (
                    <button className="btn-primary" onClick={() => handleClick()}>
                        <LogoGithub width={20} height={20} fill='white'/>
                        Iniciar con github
                    </button>
                )}

                {user && <Avatar photo={user.photo} name={user.name} email={user.email} border/>}
            </main>

            <style jsx>{`
              .title {
                color: #00a1e3;
              }

              .btn-primary {
                background-color: black;
                color: white;
                width: 200px;
                height: 30px;
                border: none;
                border-radius: 20px;
                display: flex;
                place-items: center;
                text-align: center;
                cursor: pointer;
              }

              .btn-primary:hover {
                background-color: #0D0D0D;
              }

              .btn-primary > :global(svg) {
                margin-right: 30px;
              }

            `}</style>
        </div>
    )
}
