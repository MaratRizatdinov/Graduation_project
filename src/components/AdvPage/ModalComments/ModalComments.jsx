import React, { useEffect, useState } from 'react'
import * as S from './ModalComments.style'
import { useNavigate, useParams } from 'react-router-dom'
import { useGetAdvCommentsQuery } from '../../../redux'
import { getAuthorization } from '../../../scripts/tools'
import { useAddCommentMutation } from '../../../redux'
import { createCommentDate } from '../../../scripts/tools'
import small_logo from '../../ModalAdv/logo-mob.svg'
import { Footer } from '../../Footer/footer'
import arrow from './Vector.svg'

export const ModalComments = ({ modal, setModal }) => {
  const isAuthUser = getAuthorization()
  const [text, setText] = useState('')
  const navigate = useNavigate()

  const {id} = useParams()

  const {
    data: comments,
    isLoading,
    refetch,
  } = useGetAdvCommentsQuery(id)
  const [addComment] = useAddCommentMutation()

  const handleClick = () => {
    const body = JSON.stringify({ text: text })
    addComment({ id, body })
    setText('')
  }

  const listOfItems =
    comments && comments.length ? (
      comments.map((elem) => (
        <S.ModalCommentContainer key={elem.id}>
          <S.ModalAvatarField>
            <S.ModalAvatar>
              <img
                src={`http://localhost:8090/${elem.author.avatar}`}
                alt=""
                style={{ width: '40px', height: '40px' }}
              />
            </S.ModalAvatar>
          </S.ModalAvatarField>
          <S.ModalComment>
            <S.ModalAuthor>
              {elem.author.name}
              <S.ModalDate>
                &nbsp;&nbsp;{createCommentDate(elem.created_on)}
              </S.ModalDate>
            </S.ModalAuthor>
            <S.ModalText>Комментарий</S.ModalText>
            <S.ModalContent>{elem.text} </S.ModalContent>
          </S.ModalComment>
        </S.ModalCommentContainer>
      ))
    ) : comments && !comments.length ? (
      <S.EmptyContainer>Здесь еще нет комментариев</S.EmptyContainer>
    ) : null

  useEffect(() => {
    refetch()
  }, [isLoading])

  return (
    <S.ModalForm modal={modal}>
      <S.HeaderNav>
        <S.SmallLogo
          alt="logo"
          src={small_logo}
          onClick={() => {
            setModal('unvisible')
            setText('')
            navigate('/')
          }}
        />
      </S.HeaderNav>
      <S.ModalExit
        onClick={() => {
          setModal('unvisible')
          setText('')
        }}
      />
      <S.ModalFormArea>
        <S.ModalTitle>
          <S.ModalArrow
            alt=""
            src={arrow}
            onClick={() => {
              setModal('unvisible')
              setText('')
            }}
          />
          Отзывы о товаре
        </S.ModalTitle>
        <S.ModalLabel htmlFor="comment">Добавить отзыв</S.ModalLabel>
        <S.ModalTextarea
          name="comment"
          autoComplete="off"
          autoFocus
          disabled={!isAuthUser}
          maxLength={250}
          minLength={3}
          placeholder="Введите отзыв"
          value={text}
          onChange={(e) => setText(e.target.value)}
        ></S.ModalTextarea>
        <S.ModalButton disabled={!text} onClick={() => handleClick()}>
          Опубликовать
        </S.ModalButton>
      </S.ModalFormArea>
      <S.ModalCommentsField>
        {isLoading ? null : listOfItems}
      </S.ModalCommentsField>
      <Footer blocked="blocked" />
    </S.ModalForm>
  )
}
