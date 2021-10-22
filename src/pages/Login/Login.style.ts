import styled from "styled-components";

interface IProps {
    disabled: boolean;
}

export const Wrapper = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #EFF2F5;
`

export const Title = styled.div`
    text-align: center;
    font-size: 30px;
`

export const Form = styled.form`
    width: 396px;
    background-color: #fff;
    display: flex;
    flex-direction: column;
    padding: 20px 20px;
`

export const Input = styled.input`
    border: 1px solid #dddfe2;
    border-radius: 6px;
    padding: 14px 16px;
    margin: 6px 0;
    outline: none;
    font-size: 20px;
`

export const Button = styled.button<IProps>`
    background-color: ${props => props.disabled ? '#9c9e96' : '#42b72a'};
    color: #fff;
    border-radius: 6px;
    border: none;
    font-size: 17px;
    padding: 20px 16px;
    cursor: ${(props) => props.disabled ? 'default' : 'pointer'};
    margin-top: 20px;
    margin-bottom: 30px;
    transition: 0.2s ease;


        &:hover {
            background-color:${props => !props.disabled && '#36a42'};
        }
`