import styled from "styled-components";

export const Button = styled.button`
  background-color: white;
  width: 50%;
  margin: 10px;
  border-bottom: 2px solid black;
  border-top: 2px solid black;
  border-right: 0px;
  border-left: 0px;
  height: 5vh;
  font-size: 1rem;
  font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;
  color: black;
  font-weight: bold;
`

export const ButtonBack = styled.button`
  background-color: #FF3B30;
  width: 50%;
  margin: 7px;
  border: 0px;
  border-radius: 10px;
  height: 4vh;
  font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;
  color: white;
  font-weight: bold;
`

export const Input = styled.input`
  width: 55vw;
  outline: 0px;
  border-radius: 10px;
  border: 0px;
  height: 4vh;
  margin: 7px;
  background-color: #FF3B30;
  color: white;
  font-weight: bold;
  padding: 0px 0px 0px 10px;
  font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;

  &::placeholder {
    color: white;
    font-weight: bold;
   }
`

export const Container = styled.div`
  margin-top: 12%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  padding: 24px 0;
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`

export const ContainerBut = styled.div`
  margin-top: 6vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const H3 = styled.h3`
  font-size: 1.5rem;
`

export const ContainerBack = styled.div`
  margin-top: 3vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80vw;
`