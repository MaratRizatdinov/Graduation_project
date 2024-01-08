import React, { useState } from 'react'
import { CardsField } from '../CardsField/CardsField'
import * as S from './SellerPage.style'
import { useParams } from 'react-router-dom'
import { useGetUsersQuery } from '../../redux/reducers/userApi'
import * as Tools from '../../scripts/tools'

export const SellerPage = () => {
  const params = useParams()
  const [open, setOpen] = useState(false)

  const { data: users } = useGetUsersQuery()

  const currentUser = users
    ? users.filter((elem) => elem.id === Number(params.id))
    : null
  // console.log(currentUser[0])

  // useEffect(() => {}, [isLoading])

  return (
    <S.ProfileContainer>
      <S.ProfileContent>
        <S.ProfileSettings>
          <S.ProfileLeft>
            <S.ProfileImgContainer>
              <S.ProfileImg
                src={users && `http://localhost:8090/${currentUser[0].avatar}`}
                alt=""                
              />
            </S.ProfileImgContainer>
          </S.ProfileLeft>
          <S.ProfileRight>
            <S.SellerName>{users && currentUser[0].name}</S.SellerName>
            <S.SellerCity>{users && currentUser[0].city}</S.SellerCity>
            <S.SellerInfo>
              Продает товары с{' '}
              {Tools.createTextSellsFrom(users && currentUser[0].sells_from)}
            </S.SellerInfo>
            <S.ProfileToMobile>
            <S.ProfileImgContainer>
              <S.ProfileImg
                src={users && `http://localhost:8090/${currentUser[0].avatar}`}
                alt=""                
              />
            </S.ProfileImgContainer>
          </S.ProfileToMobile>

            <S.SellerButton onClick={() => setOpen(true)}>
             <p style={{textAlign:'center'}}> Показать&nbsp;телефон <br/>
              {
                <S.SellerPhone>
                  {open
                    ? users && currentUser[0].phone
                    : users && Tools.maskPhone(currentUser[0].phone)}
                </S.SellerPhone>
              }
              </p>
            </S.SellerButton>
          </S.ProfileRight>
        </S.ProfileSettings>
      </S.ProfileContent>
      <S.ProfileTitle>Товары продавца</S.ProfileTitle>

      <CardsField user={users && currentUser[0].id} />
    </S.ProfileContainer>
  )
}
