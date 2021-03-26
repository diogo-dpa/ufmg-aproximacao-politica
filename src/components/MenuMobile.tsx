import React from 'react';

import Link from 'next/link'

import { slide as Menu } from 'react-burger-menu';

import stylesModule from '../styles/components/MenuMobile.module.css';

const MenuMobile = () => {
  return (
    <Menu
        right
        styles={styles}
    >
        <Link href="/home">
            <a className={stylesModule.menuItem}>Home</a>
        </Link>
        <Link href="/noticias">
            <a className={stylesModule.menuItem}>Notícias</a>
        </Link>
        <Link href="/partidos/teste">
            <a className={stylesModule.menuItem}>Partidos</a>
        </Link>
        <Link href="/representantes/teste">
            <a className={stylesModule.menuItem}>Representantes</a>
        </Link>
        <Link href="/">
            <a className={stylesModule.menuItem}>Sair</a>
        </Link>
      </Menu>
    );
}

const styles = {
    bmBurgerButton: {
      position: 'fixed',
      width: '36px',
      height: '30px',
      right: '36px',
      top: '36px',
      outline: 'none',
    },
    bmBurgerBars: {
      background: '#fff'
    },
    bmBurgerBarsHover: {
      background: '#a90000'
    },
    bmCrossButton: {
      height: '24px',
      width: '24px'
    },
    bmCross: {
      background: '#bdc3c7'
    },
    bmMenuWrap: {
      position: 'fixed',
      width: '80vw',
      height: '100%',
    },
    bmMenu: {
      background: '#979797BB',
      padding: '2.5em 1.5em 0',
      fontSize: '1.15em'
    },
    bmMorphShape: {
      fill: '#373a47'
    },
    bmItemList: {
      color: '#fff',
      padding: '0.8em',
      display: 'flex',
      flexDirection: 'column',
    },
    bmItem: {
      display: 'inline-block',
      fontSize: '25px'
    },
    bmOverlay: {
      background: 'rgba(0, 0, 0, 0.3)'
    }
  }

export default MenuMobile;