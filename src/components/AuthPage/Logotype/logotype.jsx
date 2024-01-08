import React from 'react'
import { useNavigate } from 'react-router-dom'
import * as S from './Logotype.style'
import logo from './logo.svg'


export const Logotype = () => {
  const navigate = useNavigate()
  return (
    <S.LogoField onClick={() => navigate('/')}>
      <S.LogoImg alt="logo" src={logo} />
    </S.LogoField>
  )
}
