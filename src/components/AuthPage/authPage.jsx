import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import * as S from './authPage.style'
import { Logotype } from './Logotype/logotype'
import { ModalInput } from './ModalInput/ModalInput'
import { checkData } from '../../scripts/tools'
import { useAddUserMutation } from '../../redux/reducers/authApi'
import { useGetTokensMutation } from '../../redux/reducers/authApi'
import { useDispatch } from 'react-redux'
import { logInApp } from '../../redux/reducers/userSlice'
import  small_logo from './logo-mob.svg'
import { Footer } from '../Footer/footer'



export const AuthPage = ({ isLoginMode }) => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [email, setEmail] = useState('')
  const [password, setPass] = useState('')
  const [repeat, setRepeat] = useState('')
  const [name, setName] = useState('')
  const [surname, setSurname] = useState('')
  const [city, setCity] = useState('')
  const [error, setError] = useState('')
  const [addUser, { isLoading: regLoading }] = useAddUserMutation()
  const [getTokens, { isLoading: tokenLoading }] = useGetTokensMutation()
  

  const handleClick = async () => {
    if (checkData({ email, password, repeat, isLoginMode })) {
      setError(checkData({ email, password, repeat, isLoginMode }))
      return
    }
    if (!isLoginMode) {
      await addUser({ email, password, name, surname, city })
        .unwrap()
        .then(() => {
          getTokens({ email, password })
            .unwrap()
            .then((fulfilled) => {
              dispatch(logInApp())
              localStorage.setItem('access', fulfilled.access_token)
              localStorage.setItem('refresh', fulfilled.refresh_token)              
              navigate('/profile/me')
            })
            .catch((rejected) => {
              setError(`Статус ошибки ${rejected.status}`)
            })
        })
        .catch((rejected) => {
          if (rejected.status === 400)
            setError('Такой пользователь уже существует')
          if (rejected.status === 422)
            setError('Некорректный электронный адрес')
        })
      return
    }
    await getTokens({ email, password })
      .unwrap()
      .then((fulfilled) => {
        dispatch(logInApp())
        localStorage.setItem('access', fulfilled.access_token)
        localStorage.setItem('refresh', fulfilled.refresh_token)
        

        navigate('/profile/me')
      })
      .catch((rejected) => {
        if (
          rejected.status === 401 &&
          rejected.data.detail === 'Incorrect password'
        )
          setError('Неправильный пароль')
        if (
          rejected.status === 401 &&
          rejected.data.detail === 'Incorrect email'
        )
          setError('Такого пользователя не существует')
        if (rejected.status === 422) setError('Некорректный электронный адрес')
      })
  }

  useEffect(() => {
    setError(null)
  }, [isLoginMode, email, password, repeat, name, surname, city])

  return (
    <S.AuthContainer>
      
      <S.ModalForm $isLoginMode={isLoginMode}>
      <S.ModalHeader>
        <S.ModalSmallLogo alt='logo' src ={small_logo}/>
      </S.ModalHeader>
        <Logotype />
        {isLoginMode ? (
          <>
            <ModalInput field="email" value={email} setValue={setEmail} />
            <ModalInput field="password" value={password} setValue={setPass} />
            {error && (
              <S.ErrorSpan $isLoginMode={isLoginMode}>{error}</S.ErrorSpan>
            )}
            <S.EnterButton
              $isLoginMode={isLoginMode}
              disabled={tokenLoading}
              onClick={() => handleClick()}
            >
              {tokenLoading ? 'Входим...' : 'Войти'}
            </S.EnterButton>
            <S.SignupButton  $isLoginMode={isLoginMode} onClick={() => navigate('/registration')}>
              Зарегистрироваться
            </S.SignupButton>
          </>
        ) : (
          <>
            <ModalInput field="email" value={email} setValue={setEmail} />
            <ModalInput field="password" value={password} setValue={setPass} />
            <ModalInput field="repeat" value={repeat} setValue={setRepeat} />
            <ModalInput field="name" value={name} setValue={setName} />
            <ModalInput field="surname" value={surname} setValue={setSurname} />
            <ModalInput field="city" value={city} setValue={setCity} />
            {error && (
              <S.ErrorSpan $isLoginMode={isLoginMode}>{error}</S.ErrorSpan>
            )}
            <S.EnterButton
              $isLoginMode={isLoginMode}
              disabled={regLoading || tokenLoading}
              onClick={() => handleClick()}
            >
              {regLoading || tokenLoading
                ? 'Идет регистрация...'
                : 'Зарегистрироваться'}
            </S.EnterButton>
          </>
        )}
        <Footer/>
      </S.ModalForm>
    </S.AuthContainer>
  )
}
