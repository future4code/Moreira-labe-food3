import React, { useContext } from 'react'
import GlobalState from '../../Global/GlobalState'
import { Container } from './styled'
import { GlobalContext } from '../../Global/GlobalContext'

const Address = () => {

  const {cart} = useContext(GlobalContext)
  
  
  
  console.log(cart)
  return (
    <div>
      <Container>
        {cart}
      </Container>
    </div>
  )
}

export default Address

