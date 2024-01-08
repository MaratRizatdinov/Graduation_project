import React, { useEffect, useState } from 'react'
import * as S from './header.style'
import { useLocation, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import {
  removeSubstring,
  addSubstring,
} from '../../../redux/reducers/searchSlice'
import { ModalAdv } from '../../ModalAdv/ModalAdv'
import { getAuthorization } from '../../../scripts/tools'
import exit from './exit.svg'
import { exitFromApp } from '../../../redux/reducers/userSlice'
import small_logo from './logo-mob.svg'

export const Header = ({modal, setModal}) => {
  const navigate = useNavigate()
  const page = useLocation().pathname
  const dispatch = useDispatch()
  // const [modal, setModal] = useState('unvisible')
  const isAuth = getAuthorization() || false
  const [value, setValue] = useState('')

  const ButtonText = () => {
    if (page === '/') return 'Вход в личный кабинет'
    return 'Личный кабинет'
  }

  const HandleClick = () => {
    if (page === '/') dispatch(removeSubstring())
    if (page !== '/profile/me') navigate('/profile/me')
  }

  const handleExit = () => {
    dispatch(exitFromApp())
    localStorage.removeItem('access')
    localStorage.removeItem('refresh')
    navigate('/login')
  }
  


  useEffect(() => {
    dispatch(addSubstring({ value }))
  }, [value])

  return (
    <S.Header>
      {modal === 'visible' ? <S.ProfileBackground page={page} /> : null}
      {modal === 'visible' ? (
        <ModalAdv modal={modal} setModal={setModal} role="newAdv" />
      ) : null}
      <S.HeaderNav>
        <S.SmallLogo alt="logo" src={small_logo} onClick={()=>navigate('/')}/>
        {page === '/' ? (
          <S.SearchField
            placeholder="Поиск"
            value={value}
            onChange={(event) => {
              setValue(event.target.value)
            }}
          />
        ) : null}
        {!isAuth ? null : (
          <>
            <S.HeaderButton onClick={() => setModal('visible')}>
              Разместить объявление
            </S.HeaderButton>
            <S.ExitButton>
              <S.ExitImg alt="exit" src={exit} onClick={() => handleExit()} />
            </S.ExitButton>
          </>
        )}
        <S.HeaderButton onClick={() => HandleClick()}>
          {ButtonText()}
        </S.HeaderButton>
      </S.HeaderNav>
    </S.Header>
  )
}
