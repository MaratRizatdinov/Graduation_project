import React, { useEffect, useRef, useState } from 'react'
import { CardsField } from '../CardsField/CardsField'
import * as S from './ProfilePage.style'
import {
  useGetUserQuery,
  useUpdateUserMutation,
} from '../../redux/reducers/userApi'

import { ModalAvatar } from './ModalAvatar/ModalAvatar'
import { useGetAdsQuery } from '../../redux'
import { useDispatch } from 'react-redux'
import { changeUser } from '../../redux/reducers/userSlice'

export const ProfilePage = () => {
  const dispatch = useDispatch()
  const nameRef = useRef()

  const { data, isLoading } = useGetUserQuery(
    {},
    { refetchOnMountOrArgChange: true },
  )
  const { refetch } = useGetAdsQuery(({}, { refetchOnMountOrArgChange: true }))
  const [updateUser] = useUpdateUserMutation()

  const [name, setName] = useState('')
  const [surname, setSurname] = useState('')
  const [city, setCity] = useState('')
  const [phone, setPhone] = useState('')
  const [avatar, setAvatar] = useState('')
  const [modal, setModal] = useState('unvisible')
  const [disabled, setDisabled] = useState(true)
  const [focus, setFocus] = useState('')

  useEffect(() => {
    if (!isLoading) {
      setName(data.name)
      setSurname(data.surname)
      setCity(data.city)
      setPhone(data.phone)
      setAvatar(data.avatar)
      dispatch(changeUser(data.name))
    }
  }, [data])

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!nameRef.current.contains(e.target)) {
        setFocus('')
      }
    }
    document.addEventListener('click', handleClickOutside)
    return () => {
      document.removeEventListener('click', handleClickOutside)
    }
  }, [focus])

  const handleClickToUpdate = async (e) => {
    e.preventDefault()
    setDisabled(true)
    const body = { name, surname, city, phone }
    await updateUser({ body })
      .unwrap()
      .then(() => refetch())
  }

  return (
    <S.ProfileContainer>
      <ModalAvatar modal={modal} setModal={setModal} avatar={avatar} />
      {modal === 'visible' ? <S.ProfileBackground /> : null}
      <S.ProfileContent>
        <S.ProfileTitle>Настройки профиля</S.ProfileTitle>
        <S.ProfileSettings>
          <S.ProfileLeft>
            <S.ProfileImgContainer>
              <S.ProfileImg src={`http://localhost:8090/${avatar}`} alt="" />
            </S.ProfileImgContainer>

            <S.ProfileChangeButton onClick={() => setModal('visible')}>
              Заменить
            </S.ProfileChangeButton>
          </S.ProfileLeft>
          <S.ProfileRight>
            <S.ProfileForm ref={nameRef}>
              <S.ProfileBlock>
                <S.ProfileLabel htmlFor="name" focus={focus}>
                  Имя
                </S.ProfileLabel>
                <S.ProfileInput
                  id="name"
                  name="name"
                  type="text"
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value)
                    setDisabled(false)
                  }}
                  onFocus={(e) => {
                    e.stopPropagation()
                    setFocus('name')
                  }}
                  placeholder="Введите имя"
                />
              </S.ProfileBlock>
              <S.ProfileBlock>
                <S.ProfileLabel htmlFor="surname" focus={focus}>
                  Фамилия
                </S.ProfileLabel>
                <S.ProfileInput
                  id="surname"
                  name="surname"
                  type="text"
                  value={surname}
                  onChange={(e) => {
                    setSurname(e.target.value)
                    setDisabled(false)
                  }}
                  onFocus={() => setFocus('surname')}
                  placeholder="Введите фамилию"
                />
              </S.ProfileBlock>              
              <S.ProfileBlock>
                <S.ProfileLabel htmlFor="city" focus={focus}>
                  Город
                </S.ProfileLabel>
                <S.ProfileInput
                  id="city"
                  name="city"
                  type="text"
                  value={city}
                  onChange={(e) => {
                    setCity(e.target.value)
                    setDisabled(false)
                  }}
                  onFocus={() => setFocus('city')}
                  placeholder="Введите город"
                />
              </S.ProfileBlock>
              <S.ProfileBlock>
                <S.ProfileLabel htmlFor="phone" focus={focus}>
                  Телефон
                </S.ProfileLabel>
                <S.ProfileInput
                  id="phone"
                  name="phone"
                  type="tel"
                  value={phone}
                  onChange={(e) => {
                    setPhone(e.target.value)
                    setDisabled(false)
                  }}
                  onFocus={() => setFocus('phone')}
                  placeholder="+7(XXX)XXX-XX-XX"
                />
              </S.ProfileBlock>
              <S.ProfileSaveButton
                disabled={disabled}
                onClick={(e) => handleClickToUpdate(e)}
              >
                Сохранить
              </S.ProfileSaveButton>
            </S.ProfileForm>
          </S.ProfileRight>
        </S.ProfileSettings>
      </S.ProfileContent>

      <S.ProfileTitle>Мои товары</S.ProfileTitle>
      <CardsField user={data && data.id} adv="myAdv" />
    </S.ProfileContainer>
  )
}
