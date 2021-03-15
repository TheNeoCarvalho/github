import styled from 'styled-components'

export const CardUser = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
    width: 300px;
    height: auto;
    background-color: #ddd;
    border-radius: 8px;
    padding: 10px
`

export const CardImage = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 90%;

    img {
        width: 50%;
        border-radius: 50%;
        margin-top: 10px
    }

    h1 {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 50%;
        height: 20px;
        color: #fff;
        border-radius: 4px;
        background-color: #333;
        font-size: 12px;
    }
`
export const CardInfo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    a {
        background-color: #0B8043;
        color: #fff;
        padding: 5px 50px;
        text-decoration: none;
        border-radius: 4px;

        &:hover {
            background-color: #333;
            color: #fff;
            transition: 0.5s ease-in
        }
    }
`

export const Username = styled.p`
    font-size: 28px;
    font-weight: bold;

`

export const Bio = styled.p`
    font-size: 16px;
    text-align: center
`