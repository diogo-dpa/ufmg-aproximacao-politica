import React from "react";

import Link from "next/link";

import { slide as Menu } from "react-burger-menu";

import stylesModule from "../styles/components/MenuMobile.module.css";

const MenuMobile = () => {
  return (
    <Menu className={stylesModule.menu} right styles={styles}>
      <Link href="/home">
        <a className={stylesModule.menuItem}>Home</a>
      </Link>
      <Link href="/emconstrucao">
        <a className={stylesModule.menuItem}>Fórum</a>
      </Link>
      <Link href="/emconstrucao">
        <a className={stylesModule.menuItem}>Notícias</a>
      </Link>
      <Link href="/emconstrucao">
        <a className={stylesModule.menuItem}>Partidos</a>
      </Link>
      <Link href="/emconstrucao">
        <a className={stylesModule.menuItem}>Representantes</a>
      </Link>
      <Link href="/">
        <a className={stylesModule.menuItem}>Sair</a>
      </Link>
    </Menu>
  );
};

const styles = {
  bmBurgerButton: {
    position: "fixed",
    width: "36px",
    height: "30px",
    right: "36px",
    top: "36px",
    outline: "none",
  },
  bmBurgerBars: {
    background: "#fff",
  },
  bmCrossButton: {
    height: "24px",
    width: "24px",
  },
  bmCross: {
    background: "#8c959b",
  },
  bmMenuWrap: {
    position: "fixed",
    top: '0px',
    width: "80vw",
  },
  bmMenu: {
    background: "rgba(151, 191, 151, 0.733)",
    backdropFilter: 'blur(10px)',
    padding: "2.5em 1.5em 0",
    fontSize: "1.15em",
  },
  bmMorphShape: {
    fill: "#373a47",
  },
  bmItemList: {
    color: "#fff",
    padding: "0.8em",
    paddingBottom: "50px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
    alignItems: "flex-end",
  },
  bmItem: {
    display: "inline-block",
    fontSize: "25px",
  },
  bmOverlay: {
    background: "rgba(0, 0, 0, 0.3)",
    height: '100%',
  },
};

export default MenuMobile;
