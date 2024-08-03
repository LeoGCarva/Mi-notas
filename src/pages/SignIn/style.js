import styled from "styled-components";
import backgroundImg from "../../assets/background.png"

export const Container = styled.div`
    height: 100vh;

    display: flex;
    align-items: stretch;

    @media(max-width: 760px){
        width: 100%;

        display: grid;
        place-content: center;
    }
`;

export const Form = styled.form`
    margin: 0 30px;
    padding: 0 136px;


    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    text-align: center;

    @media(max-width: 760px){
        margin: 0;
    }

    > h1 {
        font-size: 48px;
        color: ${({ theme }) => theme.COLORS.ORANGE};
    }

    > div {
        border-radius: 5%;
        background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
        margin-top: 70px;
        padding: 20px 30px;
    }

    > div > h2 {
        font-size: 24px;
        margin-bottom: 24px;
    }

    > p {
        font-size: 14px;
        color: ${({ theme }) => theme.COLORS.GRAY_100};
    }

    > a {
        margin-top: 100px;
        color: ${({ theme }) => theme.COLORS.ORANGE};
    }
`;

export const Background = styled.div`
    flex: 1;
    background: url(${backgroundImg}) no-repeat center center;
    background-size: cover;
    filter: opacity(40%);

    @media(max-width:760px){
        display: none;
    }
`;