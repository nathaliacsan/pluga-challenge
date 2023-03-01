import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;

        :focus {
            outline: 0;
        }

        body {
            background-color: #fff;
            color: #757575
        }

        body, input, textarea, button {
            font: 400 1rem Golos Text, sans-serif;
        }
    }
`
