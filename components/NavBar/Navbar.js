import React from "react";
import styles from "../../styles/Home.module.css";
import Head from "next/head";
import LogoDivtter from "../Logos/LogoDivtter";
import Link from "next/link";
import { GiNestEggs, GiCarillon, GiSmokeBomb, GiTotem, GiScrollQuill, GiCeremonialMask } from "react-icons/gi";
import { RiTreasureMapFill } from "react-icons/ri";
import { MdOutlineMoreHoriz } from "react-icons/md";
import Avatar from "../Avatar/Avatar";
import Button from "../Button/Button";
import useUser from "../../hooks/useUser";

function Navbar(props) {
    const links = [
        {
            href: "#",
            name: "Home",
            icon: <GiNestEggs />
        },
        {
            href: "#explore",
            name: "Explore",
            icon: <RiTreasureMapFill />
        },
        {
            href: "#notifications",
            name: "Notifications",
            icon: <GiCarillon />
        },
        {
            href: "#messages",
            name: "Messages",
            icon: <GiSmokeBomb />
        },
        {
            href: "#bookmarks",
            name: "Bookmarks",
            icon: <GiTotem />
        },
        {
            href: "#lists",
            name: "Lists",
            icon: <GiScrollQuill />
        },
        {
            href: "#profile",
            name: "Profile",
            icon: <GiCeremonialMask />
        },
        {
            href: "#more",
            name: "More",
            icon: <MdOutlineMoreHoriz />
        }
    ];
    const user = useUser();
    
    
    return (
        <>
            <nav className="navbar">
                <div className="navbar__logo">
                    <Link href="/home">
                        <a>
                            <LogoDivtter width="52" height="56" />
                        </a>
                    </Link>
                </div>
                <div className="navbar__links">
                    <div>
                        {links.map((link) => (
                            <Link href={link.href} key={link.name}>
                                <a className="navbar__link-item">
                                    {link.icon}
                                    <span>{link.name}</span>
                                </a>
                            </Link>
                        ))}
                    </div>
                    <div>
                        <Button content="Divt" width="100%" heigth="52px" fontSize="15px" fontWeight="bold"
                                margin="8px 0" />
                    </div>
                </div>
                <div className="navbar__avatar">
                    {user ? <Avatar photo={user.photo} name={user.name}
                                    email={user.email} border /> :
                        <Avatar photo="https://acegif.com/wp-content/uploads/loading-25.gif"
                                name="cargando...." border />}
                </div>
            </nav>
            
            <style jsx>{`

              .navbar {
                max-width: 275px;
                width: 100%;
                height: 100vh;
                padding-left: 12px;
                padding-right: 12px;
                position: fixed;
              }

              .navbar__logo {
                width: 100%;
                padding-right: 12px;
                padding-left: 12px;
                margin-bottom: 10px;
              }

              .navbar__link-item {
                display: flex;
                place-items: center;
                width: 100%;
                height: 50px;
                font-size: 20px;
                padding: 12px;
                text-align: center;
                color: #3b3b3b;
                border-radius: 4px;
              }

              .navbar__link-item > :global(svg) {
                width: 46px;
                height: 36px;
              }

              .navbar__link-item > span {
                margin: 12px;
              }

              .navbar__link-item:hover {
                transition: all 0.2s ease-in-out;
                background-color: #e6e6e6;
              }

              .navbar__link-item:hover > :global(svg) {
                transition: all 0.2s ease-in-out;
                transform: translateX(10px);
              }

              .navbar__link-item:hover > span {
                transition: all 0.2s ease-in-out;
                transform: translateX(10px);
              }
            `}</style>
        </>
    );
}

export default Navbar;
