import React from 'react'
import logo from "../../assets/logo.svg"
import { Img, Main } from './styled'

const Header = () => {
  return (
    <Main>
         <Img src={logo} />
    </Main>
  )
}


export default Header