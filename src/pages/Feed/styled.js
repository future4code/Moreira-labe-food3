import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 15px;
`;
export const Main = styled.div`
    width: 80%;
    margin: 10px;
    width: 80%;
    background-color: #FF3B30;
    border-radius: 10px;
`
export const Img = styled.img`
    width: 100%;
    border-radius: 10px 10px 0px 0px;
`
export const Form = styled.form`
    display: flex;
    justify-content: center;
`
export const FormSearch = styled.form`
    display: flex;
width: 80%;
justify-content: space-around;
`
export const Description = styled.div`
    margin: 0px 7px;
`
export const Inputs = styled.input`
    border: 1px solid #FF3B30;
    width: 100%;
    height: 25px;
    margin: 5px;
    border-radius: 5px;
`
export const Time = styled.p`
    color: white;
`
export const Data = styled.div`
    display: flex;
    justify-content:space-between;
`
export const Category = styled.p`
    color: black;
`
export const Select = styled.select`
  border: 1px solid #ff3b30;
  width: 40%;
  height: 28px;
  margin: 5px;
  border-radius: 5px;
`;