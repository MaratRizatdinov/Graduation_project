import styled from 'styled-components'

export const TitleField = styled.div`
  max-width: 1178px;
  width: 100%;
  margin-top: 45px;
  margin-bottom: ${(props)=>props.adspage==='true' ? '0px': '20px'};
  @media (max-width: 320px) {
    margin-top: 30px;
    margin-left: 40px;
    margin-bottom: ${(props)=>props.adspage==='true' ? '0px': '20px'};
    display:${(props)=>props.adspage==='true' ? 'none': 'block'}
  }
`
export const MainTitle = styled.div`
  font-weight: 500;
  font-size: 40px;
  line-height: 88px;
  color: #000000;
  display:flex;
  align-items: center;
  white-space: nowrap; 
  @media (max-width: 320px) {
    font-size: 24px;
    line-height: 29px;
  }
`
export const ModalArrow = styled.img`
  width: 9px;
  height: 18px;
  margin-right: 20px;
  display: none;
  @media (max-width: 320px) {
    display: block;
  }
`
