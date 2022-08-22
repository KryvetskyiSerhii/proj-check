import dark from 'assets/images/backgrounds/dark.jpg'
import blueBackground from 'assets/images/backgrounds/blueBackground.png'
import blackgrayBackground from 'assets/images/backgrounds/blackgrayBackground.png'
import whiteBackground from 'assets/images/backgrounds/whiteBackground.png'
import shareLight from 'assets/icons/new/white/small/shareLight.svg'
import shareBlack from 'assets/icons/new/black/small/shareBlack.svg'

export const themes = {
  darkTheme: {
    color: '#fff',
    background: `url(${dark}) no-repeat`,
    border: '1px solid #fff',
    icon: 'rotate(200deg)',
    modalBackground: `url(${dark}) no-repeat`,
    transBackground: 'transparent',
    resultHeaderBorder: '1px solid rgb(249, 246, 246)',
    jobsInputBorder: 'none',
    adsBorder: '1px solid rgb(245, 241, 241)',
    blogBorder: '1px solid rgba(215, 215, 215, 0.2)',
    loginBorder: '1px solid #fff',
    loginColor: '#fff',
    loginInputBorder: 'none',
    resultBlockBorder: '1px solid rgba(242, 237, 237, 0.1)',
    verticalBackground: `url(${dark})`,
    verticalBgHover: '#fff',
    verticalBoxShadowBefore: '1px 8px 0px #fff',
    verticalBoxShadowAfter: '1px -8px 0px #fff',
    shoppingBoxHoverBefore: '0px 8px 0px #fff',
    shoppingBoxHoverAfter: '0px -8px 0px #fff',
    colorHover: '#000',
    shoppingBefore: '#fff',
    shoppingAfter: 'rgba(255, 255, 255, 0.04)',
    share: `url(${shareLight}) no-repeat`,
    blogMenuShadow: '1px 2px 1px #fff',
  },
  lightTheme: {
    color: '#000',
    background: '#fff',
    border: '1px solid #000',
    icon: 'none',
    modalBackground: 'rgb(241, 241, 241)',
    transBackground: 'none',
    resultHeaderBorder: '1px solid rgb(172, 171, 171)',
    jobsInputBorder: '1px solid rgb(204, 204, 204)',
    adsBorder: '1px solid rgb(12, 12, 12)',
    blogBorder: '1px solid #000',
    loginBorder: '1px solid rgb(63, 62, 62)',
    loginColor: 'rgb(40, 39, 39)',
    loginInputBorder: '1px solid rgb(189, 187, 187)',
    resultBlockBorder: '1px solid rgba(8, 8, 8, 0.1)',
    verticalBackground: 'rgb(0,0,128)',
    verticalBgHover: 'rgb(0,0,255)',
    verticalBoxShadowBefore: '1px 8px 0px rgb(0,0,255)',
    verticalBoxShadowAfter: '1px -8px 0px rgb(0,0,255)',
    shoppingBoxHoverBefore: '0px 8px 0px rgb(0,0,255)',
    shoppingBoxHoverAfter: '0px -8px 0px rgb(0,0,255)',
    colorHover: '#fff',
    shoppingBefore: 'rgb(0,0,128)',
    shoppingAfter: 'rgba(0,0,255, 0.1)',
    share: `url(${shareBlack}) no-repeat`,
    blogMenuShadow: '1px 2px 1px #000',
  },
}