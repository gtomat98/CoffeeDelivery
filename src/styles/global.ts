import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`

    * {
       
        margin: 0;
        padding: 0;
        text-decoration: none;


        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        -webkit-appearance: none;
        user-select:none
    }

    body {
        background-color: ${(props) => props.theme.background};
        font-family: "Roboto";
    }

    li {
        list-style-type: none;
    }

    button {
        border: none;
        background-color: ${(props) => props.theme.button};
        border-radius: 8px;

        transition: all 0.3s;

        &:hover {
            color: ${(props) => props.theme.subtitle};
            cursor: pointer;
            background-color: ${(props) => props.theme.hover};
        }
    }

    img {
        user-select:none;
    }
    
   
`
