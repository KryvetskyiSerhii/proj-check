import { createGlobalStyle } from 'styled-components'
import ABeeZeeItalic from 'assets/fonts/abeezee/ABeeZeeItalic.otf'
import ABeeZeeRegular from 'assets/fonts/abeezee/ABeeZeeRegular.otf'
import ArimoBold from 'assets/fonts/arimo/ArimoBold.ttf'
import ArimoBoldItalic from 'assets/fonts/arimo/ArimoBoldItalic.ttf'
import ArimoItalic from 'assets/fonts/arimo/ArimoItalic.ttf'
import ArimoRegular from 'assets/fonts/arimo/ArimoRegular.ttf'
import MerriweatherBlack from 'assets/fonts/merriweather/MerriweatherBlack.otf'
import MerriweatherBlackItalic from 'assets/fonts/merriweather/MerriweatherBlackItalic.otf'
import MerriweatherBold from 'assets/fonts/merriweather/MerriweatherBold.otf'
import MerriweatherBoldItalic from 'assets/fonts/merriweather/MerriweatherBoldItalic.otf'
import MerriweatherItalic from 'assets/fonts/merriweather/MerriweatherItalic.otf'
import MerriweatherLight from 'assets/fonts/merriweather/MerriweatherLight.otf'
import MerriweatherLightItalic from 'assets/fonts/merriweather/MerriweatherLightItalic.otf'
import MerriweatherRegular from 'assets/fonts/merriweather/MerriweatherRegular.otf'
import dark from 'assets/images/backgrounds/dark.jpg'
export const GlobalStyles = createGlobalStyle`
*{
    margin:0;
    padding: 0;
    box-sizing: border-box;
}

`
export const FontsStyled = createGlobalStyle`
@font-face {
    font-family: 'ABeeZeeItalic';
    src: url(${ABeeZeeItalic}) format('opentype');
}
@font-face {
    font-family: 'ABeeZeeRegular';
    src: url(${ABeeZeeRegular}) format('opentype');
}
@font-face {
    font-family: 'ArimoBold';
    src: url(${ArimoBold}) format('truetype');
}
@font-face {
    font-family: 'ArimoBoldItalic';
    src: url(${ArimoBoldItalic}) format('truetype');
}
@font-face {
    font-family: 'ArimoItalic';
    src: url(${ArimoItalic}) format('truetype');
}
@font-face {
    font-family: 'ArimoRegular';
    src: url(${ArimoRegular}) format('truetype');
}
@font-face {
    font-family: 'MerriweatherBalck';
    src: url(${MerriweatherBlack}) format('opentype');
}
@font-face {
    font-family: 'MerriweatherBlackItalic';
    src: url(${MerriweatherBlackItalic}) format('opentype');
}
@font-face {
    font-family: 'MerriweatherBold';
    src: url(${MerriweatherBold}) format('opentype');
}
@font-face {
    font-family: 'MerriweatherBoldItalic';
    src: url(${MerriweatherBoldItalic}) format('opentype');
}
@font-face {
    font-family: 'MerriweatherItalic';
    src: url(${MerriweatherItalic}) format('opentype');
}
@font-face {
    font-family: 'MerriweatherLight';
    src: url(${MerriweatherLight}) format('opentype');
}
@font-face {
    font-family: 'MerriweatherLightItalic';
    src: url(${MerriweatherLightItalic}) format('opentype');
}
@font-face {
    font-family: 'MerriweatherRegular';
    src: url(${MerriweatherRegular}) format('opentype');
}
:: -webkit-scrollbar {
    width: .7em;
}

:: -webkit-scrollbar-track {
    background: url(${dark});
    
}

:: -webkit-scrollbar-thumb {
    // background: url(${dark});
    background: hsl(0 0% 100% / .5);
    border: .15em solid hsl(0 0% 20% / 1);
    border-radius: 100vw;
}

:: -webkit-scrollbar-thumb:hover {
    background: hsl(0 0% 100% / 1);
    border: .15em solid hsl(0 0% 20% / 1);
}
@supports (scrollbar-color: red blue) {
    * {
        scrollbar-color: hsl(340 100% 50% / 1) hsl(200 100% 50% / 1);
    }
}

`
