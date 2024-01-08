import styled from 'styled-components'

import { keyframes, css } from 'styled-components'

export const CardsField = styled.div`
  max-width: 1178px;
  width: 100%;  
  margin-top: 20px;
  background-color: #ffffff;
  display: grid;
  grid-template-columns: repeat(4, 270px);
  grid-auto-rows: 441px;
  grid-gap: 40px 26px;
  justify-content: space-between;
  overflow-x: hidden;
  overflow-y: auto;
    height: ${(props) => props.path == "/" ? '922px' : '441px'};
  @media (max-width: 320px) {
    grid-template-columns: repeat(2, 137px);
    grid-gap: 40px 10px;
    padding-left: 18px;
    padding-right: 18px;
    grid-auto-rows: 265px;
    height: ${(props) => props.path == "/" ? '605px' : '295px'};
    margin-bottom:10px;
  }
`
export const CardContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  @media (max-width: 320px) {
    width: 137px;
    height: 293px;
    box-shadow: 1px 1px 3px 0px #ccc;
    border-radius:6px;
  }
`
export const CardImage = styled.div`
  width: 270px;
  height: 270px;
  background-image: ${(props) => props.$img};
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  background-color: #f0f0f0;
  @media (max-width: 320px) {
    width: 137px;
    height: 132px;
  }
`
const shine = keyframes`
      0%{background-position-x: -500px}
      100% {background-position-x: 500px}    
  }
  `
const animationCode = css`
  ${shine} 25.0s linear infinite;
`
const Skeleton = css`
  background: #f0f0f0;
  background: linear-gradient(90deg, #f0f0f0, #009ee4, #f0f0f0);
  animation: ${animationCode};
`

export const SceletonCardImage = styled(CardImage)`
  ${Skeleton}
  height: 460px;
  border-radius: 15px;
`

export const CardTitle = styled.h3`
  height: 52px;
  font-size: 22px;
  font-weight: 500;
  line-height: 26px;
  color: #009ee4;
  margin-bottom: 10px;
  margin-top: 20px;
  overflow: hidden;
  text-overflow: ellipsis;
  @media (max-width: 320px) {
    font-size: 14px;
  }
`
export const CardPrice = styled.p`
  color: #000000;
  font-size: 22px;
  font-weight: 500;
  line-height: 33px;
  margin-bottom: 10px;
  @media (max-width: 320px) {
    font-size: 16px;
  }
`
export const CardPlace = styled.p`
  font-size: 16px;
  line-height: 21px;
  color: #5f5f5f;
  margin-bottom: 4px;
  @media (max-width: 320px) {
    font-size: 12px;
  }
`
export const CardDate = styled(CardPlace)`
  margin-bottom: 0;
`

