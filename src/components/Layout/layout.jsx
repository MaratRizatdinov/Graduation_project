import React, {useState} from 'react'
import * as S from './layout.style'
import { Header } from './Header/header'
import { Navigation } from './Navigation/Navigation'
import { Title } from './Title/Title'
import { Outlet } from 'react-router-dom'
import { Footer } from '../Footer/footer' 

export const Layout = () => {

  const [modal, setModal] = useState('unvisible')
  return (
    <S.PageWrapper>
      <S.PageContainer>
        <Header modal={modal} setModal={setModal}/>
        <Navigation />
        <S.MainContainer>
          <Title/>
          <Outlet/>          
        </S.MainContainer>
        <Footer setModal={setModal}/>
      </S.PageContainer>
    </S.PageWrapper>
  )
}
