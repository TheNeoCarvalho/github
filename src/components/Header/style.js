import styled from 'styled-components'

export const Box = styled.header`
    width: 100%;
    height: 50px;
    background-color: #333;
    display: flex;
    justify-content: space-around;
    align-items: center;
`

export const H1 = styled.h1`
    color: white;
    font-size: 22px;
    display: flex;
    justify-content: center;
    align-items: center;
    
`
export const Image = styled.img`
    width: 45px;
    height: 45px;
    margin-right: 10px;
`
export const Search = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
`


export const Input = styled.input`
    font-size: 18px;
    border-radius: 15px;
    border: none;
    outline: none;
    padding: 5px;
    color: #555;
`
export const Btn = styled.button`
    font-size: 18px;
    border-radius: 15px;
    padding: 5px 10px;
    border: 1px solid #0B8043;
    outline: none;
    margin-left: 5px;
    background-color: #333;
    color: #0B8043;
    cursor: pointer;
    font-weight: bold;
    transition: 0.1s;

    &:hover {
        border: 1px solid #fff;
        color: #fff;
        background-color: #0B8043;
    }
`
