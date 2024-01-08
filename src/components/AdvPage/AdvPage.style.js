import styled from 'styled-components'

export const AdvWrapper = styled.div`
  max-width: 1440px;
  width: 100%;
  margin-top: 40px;
  padding: 0px 0px 70px;
  display: flex;
  justify-content: center;
  @media (max-width: 320px) {
    margin-top: 0px;
    padding-bottom: 20px;
  }
`
export const AdvContent = styled.div`
  max-width: 1178px;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: start;
  justify-content: start;
  @media (max-width: 320px) {
    width: 320px;
    flex-direction: column;
    align-items: center;
  }
`
export const AdvLeftSide = styled.div`
  max-width: 480px;
  margin-right: 54px;
  @media (max-width: 320px) {
    margin-right: 0px;
  }
`
export const AdvFillImg = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const AdvMainImgCont = styled.div`
  width: 480px;
  height: 480px;
  background-color: #f0f0f0;
  margin: 0 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  @media (max-width: 320px) {
    width: 320px;
    height: 320px;
    margin: 0px 0px;
  }
`
export const BarPointsContainer = styled.div`
  width: 68px;
  height: 8px;  
  top:285px;
  left:115px;
  position:absolute;
  display:none;
  @media (max-width: 320px) {
    display:flex;
    justify-content: space-between;
  }
`
export const BarPoint = styled.div`
  width: 8px;
  height: 8px;
  border-radius:3px;  
  border: 1px solid #FFF;  
  background-color:${(props)=>props.current==props.point ? '#FFF':'inherit'};
  
`


export const AdvMainImg = styled.img`
  width: 480px;
  height: 480px;
  @media (max-width: 320px) {
    width: 320px;
    height: 320px;
  }
`

export const AdvBar = styled.div`
  margin-top: 30px;
  width: 490px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: left;
  overflow: hidden;
  margin-left: -5px;
  @media (max-width: 320px) {
    display: none;
  }
`
export const AdvBarImg = styled.div`
  width: 91px;
  min-width: 90px;
  height: 90px;
  background-color: #f0f0f0;
  margin: 0 3px;
  cursor: pointer;
  border: ${(props) =>
    props.id === props.current ? '2px solid #009ee4' : '2px solid #f0f0f0'};
  box-sizing: inline-box;
`
export const AdvRightSide = styled.div`
  max-width: 621px;
  display: flex;
  flex-direction: column;
  @media (max-width: 320px) {
    width: 278px;
  }
`
export const AdvTitle = styled.h3`
  font-size: 32px;
  line-height: 46px;
  font-weight: 500;
  color: #000000;
  margin-bottom: 10px;
  @media (max-width: 320px) {
    font-size: 18px;
    line-height: 25px;
    padding-top: 10px;
  }
`
export const AdvInfo = styled.div`
  margin-bottom: 34px;
  @media (max-width: 320px) {
    margin-bottom: 14px;
  }
`
export const AdvDate = styled.div`
  font-size: 16px;
  line-height: 21px;
  color: #5f5f5f;
  margin-bottom: 4px;
  @media (max-width: 320px) {
    font-size: 14px;
    line-height: 17px;
  }
`
export const AdvCity = styled(AdvDate)``
export const AdvLink = styled(AdvDate)`
  color: #009ee4;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
  @media (max-width: 320px) {
    padding-top: 5px;
  }
`
export const AdvPrice = styled.div`
  font-size: 28px;
  line-height: 39px;
  font-weight: 600;
  margin-bottom: 20px;
  @media (max-width: 320px) {
    font-size: 18px;
    line-height: 25px;
  }
`
export const AdvButton = styled.button`
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
  &:hover {
    background-color: #0080c1;
  }
  &:active {
    background-color: #009ee4;
  }
  @media (max-width: 320px) {
    width: 278px;
    font-size: 14px;
    height: 57px;
  }
`
export const AdvButtonThin = styled(AdvButton)`
  font-weight: 400;
`
export const AdvPhone = styled.span`
  display: block;
  font-size: 14px;
  font-weight: 400;
  @media (max-width: 320px) {
    font-size: 12px;
  }
`
export const AdvAuthor = styled.div`
  margin-top: 34px;
  margin-bottom: 20px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  cursor: pointer;
`
export const AdvAuthorImg = styled.div`
  width: 40px;
  height: 40px;
  background-color: #f0f0f0;
  border-radius: 50%;
  overflow: hidden;
`
export const AdvAuthorCont = styled.div`
  margin-left: 12px;
`
export const AdvAuthorName = styled.p`
  font-size: 20px;
  line-height: 26px;
  font-weight: 600;
  color: #009ee4;
  @media (max-width: 320px) {
    font-size: 18px;
    line-height: 21px;
  }
`
export const AdvAuthorAbout = styled.p`
  font-size: 16px;
  line-height: 32px;
  color: #5f5f5f;
  @media (max-width: 320px) {
    font-size: 14px;
  }
`
export const AdvMainContainer = styled.div`
  max-width: 1178px;
  width: 100%;
  margin: 0 auto;
  padding: 0px 5px;
  @media (max-width: 320px) {
    padding: 0px 21px;
  }
`
export const AdvMainTitle = styled.h3`
  font-size: 32px;
  line-height: 46px;
  font-weight: 500;
  color: #000000;
  margin-bottom: 20px;
  padding: 0 5px;
  @media (max-width: 320px) {
    font-size: 18px;
    padding: 0;
  }
`
export const AdvMainContent = styled.div`
  max-width: 792px;
  width: 100%;
  padding: 0 5px 117px;
  @media (max-width: 320px) {
    padding: 0 0 20px;
    width: 278px;
  }
`
export const AdvMainText = styled.p`
  font-size: 16px;
  line-height: 24px;
  color: #000000;
  @media (max-width: 320px) {
    font-size: 14px;
    line-height: 21px;
  }
`
export const AdvBackground = styled.div`
  width: 100%;
  height: 1135px;
  position: absolute;
  background-color: #009ee4;
  left: 0px;
  top: 0px;
  opacity: 0.05;
  z-index: 1;
  @media (max-width: 320px) {
    height: 1135px;
  }
`
export const ButtonContainer = styled.div`
  display: flex;
  gap: 20px;
  @media (max-width: 320px) {
    flex-direction: column;
  }
`
