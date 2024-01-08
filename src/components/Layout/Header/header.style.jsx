import styled from 'styled-components'

export const Header = styled.div`
  background-color: #009ee4;
  display: flex;
  justify-content: center;
`
export const HeaderNav = styled.div`
  height: 79px;
  max-width: 1178px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: end;
  gap: 10px;
  position: relative;
  @media (max-width: 320px) {
    height: 55px;
    justify-content: start;
    padding-left: 17px;
  }
`
export const HeaderButton = styled.div`
  // width: 224px;
  height: 40px;
  border: 1px solid #ffffff;
  padding: 8px 24px;

  border-radius: 6px;
  background-color: transparent;
  color: #ffffff;
  font-size: 16px;
  font-weight: 500;
  line-height: 1;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    background-color: rgba(255, 255, 255, 0.15);
  }
  &:active {
    background-color: #009ee4;
  }
  @media (max-width: 320px) {
    display: none;
  }
`
export const ProfileBackground = styled.div`
  width: 100%;
  height: 1336px;
  height: ${(props)=>props.page==='/' ? '1247px' : '1336px'};
  position: absolute;
  background-color: #009ee4;
  left: 0px;
  top: 0px;
  opacity: 0.05;
  z-index: 1;
  @media (max-width: 320px) {    
    height:${(props)=>props.page==='/profile/me' ? '1238px' : '823px'};
  }
`
export const ExitButton = styled.div`
  width: 40px;
  height: 40px;
  background-color: transparent;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 20px;
  left: 1230px;
  @media (max-width: 320px) {
    display: none;
  }
`
export const ExitImg = styled.img`
  height: 40px;
  width: 40px;
  opacity: 1;
  &:hover {
    opacity: 0.7;
  }
  &:active {
    opacity: 1;
  }
`
export const SmallLogo = styled.img`
  width: 32px;
  height: 32px;
  display: none;
  @media (max-width: 320px) {
    display: block;
  }
`
export const SearchField = styled.input`
  display: none;
  @media (max-width: 320px) {
    display: block;
    width: 243px;
    height:32px;
    border: 1px solid #d9d9d9;
    border-radius: 30px;
    padding: 9px 17px;
    font-size: 14px;
    line-height: 21px;    
    &::placeholder {
      color: #d9d9d9;
    }  
  }
`
