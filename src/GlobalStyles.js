import { createGlobalStyle } from 'styled-components'
import ManropeExtraLight from './fonts/Manrope-ExtraLight.ttf'
import ManropeBold from './fonts/Manrope-Bold.ttf'

const GlobalStyles = createGlobalStyle`

    * {
        box-sizing: border-box;
        border: 0;
        margin: 0;
    }

    body {
        @font-face {
            font-family: 'Manrope';
            src: url(${ManropeExtraLight});
            font-weight: light;
        }

        @font-face {
            font-family: 'Manrope';
            src: url(${ManropeBold});
            font-weight: bold;
        }

        font-family: 'Manrope', sans-serif;

        min-height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;

        background-color: hsl(218, 23%, 16%);
    }

`

export default GlobalStyles
