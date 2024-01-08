import { styled } from 'styled-components'

export const FooterContainer = styled.div`
  display: none;
  @media (max-width: 320px) {
    display: flex;
    width: 320px;
    height: 54px;
    justify-content: center;
    align-items: center;
    gap: 45px;
  }
`
export const FooterItem = styled.div`
  width: 42px;
  height: 42px;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const FooterImgOne = styled.img`
  width: 28px;
  height: 23px;
`
export const FooterImgTwo = styled.img`
  width: 42px;
  height: 42px;
`
export const FooterImgThree = styled.img`
  width: 27px;
  height: 27px;
`
