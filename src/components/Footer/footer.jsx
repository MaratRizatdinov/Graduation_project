import React from 'react'
import * as S from './footer.style'
import home from './home.svg'
import circle from './circle.svg'
import profile from './profile.svg'
import { useNavigate, useLocation } from 'react-router-dom'

export const Footer = ({setModal, blocked}) => {
  const navigate=useNavigate()
  const path=useLocation().pathname

  const handleClickToHome=()=>{
    if(!blocked) navigate('/')
  } 
  const handleClickToProfile=()=>{
    if(!blocked)  navigate('/profile/me')
  }   
  const handleClickToAdd=()=>{
    if(path !=='/login' && path !=='/registration'){      
      if(!blocked) setModal('visible')
    }
  }   

  return (
    <S.FooterContainer>
      <S.FooterItem>
        <S.FooterImgOne alt= 'main' src={home} onClick={()=>handleClickToHome()}/>
      </S.FooterItem>
      <S.FooterItem>
        <S.FooterImgTwo alt ='#' src={circle} onClick={()=>handleClickToAdd()}/>
      </S.FooterItem>
      <S.FooterItem>
        <S.FooterImgThree alt ='profile' src={profile} onClick={()=>handleClickToProfile()}/>
      </S.FooterItem>
    </S.FooterContainer>
  )
}
