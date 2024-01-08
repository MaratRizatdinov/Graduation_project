import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import * as S from './AdvPage.style'
import { useGetAdvCommentsQuery, useGetAdvQuery } from '../../redux'
import * as Tools from '../../scripts/tools'
import { ModalComments } from './ModalComments/ModalComments'
import { useNavigate } from 'react-router-dom'
import { useGetUserQuery } from '../../redux/reducers/userApi'
import { ModalAdv } from '../ModalAdv/ModalAdv'
import { useDeleteAdvMutation } from '../../redux'

export const AdvPage = () => {
  const navigate = useNavigate()
  const advParam = useParams()

  const [open, setOpen] = useState(false)
  const [mainUrl, setMainUrl] = useState(0)
  const [modalComment, setModalComment] = useState('unvisible')
  const [modalEdit, setModalEdit] = useState('unvisible')

  const { data: user } = useGetUserQuery()
  const { data: comments } = useGetAdvCommentsQuery(advParam.id)
  const { data: adv } = useGetAdvQuery(advParam.id)
  const [deleteAdv] = useDeleteAdvMutation()

  const userID = user?.id || 'noAuth'

  const handleRouteToSellerPage = (id) => {
    navigate(`/profile/${id}`)
  }

  const clickToDeleteAdv = () => {
    deleteAdv(adv.id)
    navigate(-1)
  }

  const listOfBarItems = (count) => {
    let result = []
    for (let i = 0; i < count; i++) {
      result.push(
        <S.AdvBarImg key={i} id={i} onClick={() => setMainUrl(i)} current={mainUrl}>
          <S.SmallImg
            src={
              adv &&
              adv.images[i] &&
              `http://localhost:8090/${adv.images[i].url}`
            }
            alt=""            
          />
        </S.AdvBarImg>,
      )
    }
    return result
  }

  return (
    <>
      <S.AdvWrapper>
        {modalComment === 'visible' || modalEdit === 'visible' ? (
          <S.AdvBackground />
        ) : null}
        {modalComment === 'visible' ? (
          <ModalComments modal={modalComment} setModal={setModalComment} />
        ) : null}
        {modalEdit === 'visible' ? (
          <ModalAdv modal={modalEdit} setModal={setModalEdit} role="editAdv" />
        ) : null}
        <S.AdvContent>
          <S.AdvLeftSide>
            <S.AdvFillImg>
              <S.AdvMainImgCont>
                <S.AdvMainImg
                  src={
                    adv &&
                    adv.images[mainUrl] &&
                    `http://localhost:8090/${adv.images[mainUrl].url}`
                  }
                  alt=""
                  onClick={() => {
                    if (mainUrl === 4) {
                      setMainUrl(0)
                    } else setMainUrl((prev) => prev + 1)
                  }}
                />
                <S.BarPointsContainer>
                  <S.BarPoint current={mainUrl} point={0}></S.BarPoint>
                  <S.BarPoint current={mainUrl} point={1}></S.BarPoint>
                  <S.BarPoint current={mainUrl} point={2}></S.BarPoint>
                  <S.BarPoint current={mainUrl} point={3}></S.BarPoint>
                  <S.BarPoint current={mainUrl} point={4}></S.BarPoint>
                </S.BarPointsContainer>
              </S.AdvMainImgCont>
              <S.AdvBar>{listOfBarItems(5)}</S.AdvBar>
            </S.AdvFillImg>
          </S.AdvLeftSide>
          <S.AdvRightSide>
            <S.AdvTitle>{adv && adv.title}</S.AdvTitle>
            <S.AdvInfo>
              <S.AdvDate>{adv && Tools.editDate(adv)}</S.AdvDate>
              <S.AdvCity>{adv && adv.user.city}</S.AdvCity>
              <S.AdvLink onClick={() => setModalComment('visible')}>
                {Tools.editWordEnd(comments && comments.length)}
              </S.AdvLink>
            </S.AdvInfo>
            <S.AdvPrice>{adv && Tools.editPrice(adv)}</S.AdvPrice>
            {adv && userID === adv.user.id ? (
              <S.ButtonContainer>
                <S.AdvButtonThin onClick={() => setModalEdit('visible')}>
                  Редактировать
                </S.AdvButtonThin>
                <S.AdvButtonThin onClick={() => clickToDeleteAdv()}>
                  Снять с публикации
                </S.AdvButtonThin>
              </S.ButtonContainer>
            ) : (
              <S.AdvButton onClick={() => setOpen(true)}>
                Показать&nbsp;телефон
                <S.AdvPhone>
                  {open
                    ? adv && adv.user.phone
                    : adv && Tools.maskPhone(adv.user.phone)}
                </S.AdvPhone>
              </S.AdvButton>
            )}
            <S.AdvAuthor onClick={() => handleRouteToSellerPage(adv.user.id)}>
              <S.AdvAuthorImg>
                <img
                  src={adv && `http://localhost:8090/${adv.user.avatar}`}
                  alt=""
                  style={{ width: '40px', height: '40px' }}
                />
              </S.AdvAuthorImg>
              <S.AdvAuthorCont>
                <S.AdvAuthorName>{adv && adv.user.name}</S.AdvAuthorName>
                <S.AdvAuthorAbout>
                  Продает товары с{' '}
                  {adv && Tools.createTextSellsFrom(adv.user.sells_from)}
                </S.AdvAuthorAbout>
              </S.AdvAuthorCont>
            </S.AdvAuthor>
          </S.AdvRightSide>
        </S.AdvContent>
      </S.AdvWrapper>

      <S.AdvMainContainer>
        <S.AdvMainTitle>Описание товара</S.AdvMainTitle>
        <S.AdvMainContent>
          <S.AdvMainText>{adv && adv.description}</S.AdvMainText>
        </S.AdvMainContent>
      </S.AdvMainContainer>
    </>
  )
}
