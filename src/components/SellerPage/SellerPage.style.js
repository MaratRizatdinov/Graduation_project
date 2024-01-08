import styled from 'styled-components'

export const ProfileContainer = styled.div`
  width: 1178px;
  @media (max-width: 320px) {
    width: 320px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`
export const ProfileContent = styled.div`
  max-width: 834px;
  margin-bottom: 60px;
  @media (max-width: 320px) {
    width: 278px;
  }
`
export const ProfileTitle = styled.h3`
  font-size: 32px;
  line-height: 70px;
  font-weight: 500;
  color: #000000;
  margin-bottom: 20px;
  @media (max-width: 320px) {
    font-size: 18px;
    line-height: 18px;
    align-self: flex-start;
    padding-left:22px;
  }
`
export const ProfileSettings = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  @media (max-width: 320px) {
    width: 278px;
  }
`
export const ProfileLeft = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-right: 43px;
  @media (max-width: 320px) {
    display: none;
  }
`
export const ProfileToMobile = styled.div`
  display: none;
  @media (max-width: 320px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-right: 43px;
  }
`

export const ProfileImgContainer = styled.div`
  width: 170px;
  height: 170px;
  border-radius: 50%;
  border: 1px solid #f0f0f0;
  background-color: #f0f0f0;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 320px) {
    width: 132px;
    height: 132px;
    margin-top: 20px;
  }
`
export const ProfileImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`

export const ProfileRight = styled.div`
  width: 100%;
`
export const SellerName = styled.h3`
  font-size: 20px;
  line-height: 26px;
  margin-bottom: 6px;
`
export const SellerCity = styled.p`
  font-size: 16px;
  line-height: 21px;
  color: #5f5f5f;
  margin-bottom: 6px;
`
export const SellerInfo = styled(SellerCity)``

export const SellerButton = styled.div`
  margin-top: 20px;
  background-color: #009ee4;
  border-radius: 6px;
  border: 1px solid #009ee4;
  width: 214px;
  height: 62px;
  font-size: 16px;
  font-weight: 500;
  line-height: 22px;
  color: #ffffff;
  font-family: 'Roboto', sans-serif;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  cursor: pointer;
  &:hover {
    background-color: #0080c1;
  }
  &:active {
    background-color: #009ee4;
  }
  @media (max-width: 320px) {
    font-size: 14px;
    line-height: 20px;
    width: 278px;
    height: 57px;
  }
`
export const SellerPhone = styled.span`
  font-size: 14px;
  @media (max-width: 320px) {
    font-size: 12px;
  }
`
