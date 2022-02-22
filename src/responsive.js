import {css} from 'styled-components'

export const mobile = (props) => {
    return css`
        @media only screen and (max-width: 380px){
            ${props}
        }
    `;
}

export const tablet = (props) => {
    return css`
        @media only screen and (max-width: 840px){
            ${props}
        }
    `;
}

export const small = (props) => {
    return css`
        @media only screen and (max-width: 1440px){
            ${props}
        }
    `;
}