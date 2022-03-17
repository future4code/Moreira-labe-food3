import React, { useContext } from 'react'
import { useForm } from '../../hook/useForm'
import { quantidade } from "../../constants/quantidade"
import styled from "styled-components";
import { GlobalContext } from '../../Global/GlobalContext';

const Main = styled.div `
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
    width: 400px;
`
const Img = styled.img`
    width: 100px;
    height: 100px;
`

export default function AllCard(props) {

  const { form, onChangeForm, clearForm } = useForm({quantidade: ""})
  const {cart, setCart } = useContext(GlobalContext)

    const onChange = (e) =>{
        e.preventDefault()
        clearForm()
    }

    const produto = {
      name:props.name,
      id:props.id,
      quantidade:form.quantidade,
      foto:props.photoUrl,
      preco:props.price
    }

    const adicionarAoCarrinho = (produto) => {
      const novoCarrinho = [...cart]

      const listaCarrinho = novoCarrinho.find((item) => produto.id === item.id)

      if(listaCarrinho){
        return {...novoCarrinho,  quantidade:form.quantidade} 
      } else{
        novoCarrinho.push(produto)
      }
      setCart(novoCarrinho)
      
      console.log("cart",cart)
    }  
    

  return (
    <div>
        <h2>{props.name}</h2> <Img src={props.photoUrl}/> <br/>
        <Main>
            <form onSubmit={onChange}>
            <select 
            value={form.quantidade}
            name={"quantidade"}
            onChange={onChangeForm}
            required
            >
                <option value={""} disabled>Quantidade</option> 
                {quantidade.map((quant, index) => {
                return <option key={index}>{quant}</option>
                })}
            </select>
            <span>{props.category}</span> <button onClick={() => adicionarAoCarrinho(produto)} type="submit">Adicionar</button>
            {form.quantidade}
            </form>
        </Main>
        <p>{props.description}</p>
        <p>R$ {props.price}</p>
    </div>
  )
}
