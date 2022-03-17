import axios from 'axios'
import React, { useContext, useEffect } from 'react'
import styled from 'styled-components'
import { GlobalContext } from '../../Global/GlobalContext'

const Main = styled.div `
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
  width: 400px;
`

const Profile = () => {

  const {profile, setProfile, address, SetAddress} = useContext(GlobalContext)


  const GetProfile = () => {
    
    const token = localStorage.getItem('token')

    axios
    .get('https://us-central1-missao-newton.cloudfunctions.net/rappi4A/profile', {
      headers: {
        auth: token
      }
    })
    .then((res) => {
      console.log('perfil', res.data.user)
      setProfile(res.data.user)
    })
    .catch((err) => {
      console.log(err)
    })
  }

  

  const GetFullAddress = () => {
    
    const token = localStorage.getItem('token')

    axios
    .get('https://us-central1-missao-newton.cloudfunctions.net/rappi4A/profile/address', {
      headers: {
        auth: token
      }
    })
    .then((res) => {
      console.log('endereço', res.data.address)
      SetAddress(res.data.address)
    })
    .catch((err) => {
      console.log(err)
    })
  }

  useEffect(() => {

    GetProfile()
    GetFullAddress()

  }, [])


  return (
    <div>
      <Main>{profile.name}</Main>
      <Main>{address.street}</Main>  
    </div>
  )
}

export default Profile