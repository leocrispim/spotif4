import styled from 'styled-components'
import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    body{
        margin: 0;
    }
`

export const AppHeader = styled.div`
    border-bottom: solid black 2px;
    padding: 5px;
`

export const AppMainDiv = styled.div`
    background-color: rgb(87, 10, 187);
    color: white;
    text-align: center;
    height: 100vh;
`

export const FooterDiv = styled.div`
    background-color: black;
    color: rgb(87, 10, 187);
    padding: 10px;
`

export const PLLink = styled.span`
    margin-top: 15px;
    margin-bottom: 15px;
    margin-right: 15px;
    font-size: 30px;
    text-decoration: underline;
`

export const PLGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
`

export const CreatePLDiv = styled.div`
    background-color: black;
    color: white;
    padding: 15px;
    margin-left: -15px;
`

export const CreatePLInput = styled.input`
    margin-left: 10px;
    margin-right: 10px;
`

export const CreatePLButton = styled.button`
    border-radius: 60px;
    height: 30px;
    width: 120px;
    font-size: 15px;
`

export const DeletePLButton = styled.button`
    background-color: red;
    color: black;
    border-radius: 100%;
    margin-left: 5px;
`

export const PLPageDiv = styled.div`
    background-color:rgb(87, 10, 187);
    height: 80vh;
`

export const NewSongDiv = styled.div`
    display: flex;
    background-color: black;
    color: white;
    padding: 15px;
    margin-left: -15px;
`

export const PLPageHeaderText1 = styled.span`
    margin-left: 10px;
`

export const PLPageHeaderDiv = styled.div`
    display:flex;
    justify-content: space-evenly;
    width: 100%;
    height: 100%;
`

export const BackButton = styled.button`
    border-radius: 50px;
`