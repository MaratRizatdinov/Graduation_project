import React from 'react'
import * as S from './Title.style'
import { useLocation, useNavigate } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import arrow from './Vector.svg'

export const Title = () => {
  const page = useLocation().pathname
  const info = useParams()
  const name = useSelector((s) => s.user.username)
  const navigate= useNavigate()

  const TitleText = () => {
    if (page === '/') return 'Объявления'
    if (page === '/profile/me') return `Здравствуйте, ${name}!`
    if (info.id && page === `/profile/${info.id}`) {
      return (
        <>
          <span>
            <S.ModalArrow alt="" src={arrow} onClick={()=>navigate(-1)}/>
          </span>
          <span>Профиль продавца</span>
        </>
      )
    }
    return
  }

  const adspage = () => {
    if (info.id && page === `/ads/${info.id}`) return 'true'
    return 'false'
  }

  return (
    <S.TitleField adspage={adspage()}>
      <S.MainTitle>{TitleText()}</S.MainTitle>
    </S.TitleField>
  )
}
