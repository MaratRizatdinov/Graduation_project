import React from 'react'
import { useState } from 'react'
import * as S from './Navigation.style'
import logotype from './logotype.svg'
import { useNavigate, useLocation } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { addSubstring } from '../../../redux/reducers/searchSlice'

export const Navigation = () => {
  const navigate = useNavigate()
  const page = useLocation().pathname
  const [value, setValue] = useState('')
  const dispatch = useDispatch()

  const ButtonText = () => {
    if (page === '/') return 'Найти'
    return 'Вернуться на главную'
  }

  const HandleClick = () => {
    if (page !== '/') {
      navigate('/')
      return
    }
    dispatch(addSubstring({ value }))
    setValue('')
  }

  return (
    <S.NavContainer>
      <S.Navigation $page={page}>
        <S.LogoField onClick={() => HandleClick()}>
          <img alt="logo" src={logotype} />
        </S.LogoField>
        <S.SearchField
          placeholder="Поиск по объявлениям"
          value={value}
          onChange={(event) => setValue(event.target.value)}
        ></S.SearchField>
        <S.SearchButton onClick={() => HandleClick()}>
          {ButtonText()}
        </S.SearchButton>
      </S.Navigation>
    </S.NavContainer>
  )
}
