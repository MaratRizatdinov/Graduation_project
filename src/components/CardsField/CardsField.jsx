import React from 'react'
import * as S from './CardsField.style'
import { useGetAdsQuery } from '../../redux'
import * as Tools from '../../scripts/tools'
import { useLocation, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { removeSubstring } from '../../redux/reducers/searchSlice'

export const CardsField = ({ user }) => {
  const path = useLocation().pathname
  const navigate = useNavigate()
  const { data = [], isLoading } = useGetAdsQuery()
  const dispatch = useDispatch()
  const subString = useSelector((state) => state.search.filterString)

  const HandleClick = (id) => {
    dispatch(removeSubstring())
    navigate(`/ads/${id}`)
  }

  let currentList = data.filter((elem) =>
    elem.title.toLowerCase().includes(subString.toLowerCase()),
  )
  if (user) {
    currentList = data.filter((elem) => elem.user.id == user)
  }

  const listOfItems = currentList.map((elem) => (
    <S.CardContainer key={elem.id} onClick={() => HandleClick(elem.id)}>
      <S.CardImage $img={Tools.getUrl(elem)} />
      <S.CardTitle>{elem.title}</S.CardTitle>
      <S.CardPrice>{Tools.editPrice(elem)}</S.CardPrice>
      <S.CardPlace>{elem.user.city}</S.CardPlace>
      <S.CardDate>{Tools.editDate(elem)}</S.CardDate>
    </S.CardContainer>
  ))

  const skeletonCard = (path) => {
    let itemsCount = path === '/' ? 8 : 4
    const result = []
    for (let i = 0; i < itemsCount; i++) {
      result.push(
        <S.CardContainer key={i}>
          <S.SceletonCardImage />
        </S.CardContainer>,
      )
    }
    return result
  }

  return (
    <S.CardsField path={path}>{isLoading ? skeletonCard(path) : listOfItems}</S.CardsField>
  )
}
