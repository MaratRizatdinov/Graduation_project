import styled from 'styled-components'

export const ModalInput = styled.input`
  width: 100%;
  border: none;
  border-bottom: 1px solid #d0cece;
  padding: 8px 1px;
  font-size: 18px;
  line-height: 24px;
  margin-bottom: 30px;
  &::placeholder {
    color: #d9d9d9;
  }  
  @media (max-width: 320px) {
    width: 279px;
    height:40px;
    border: 1px solid #d9d9d9;
    border-radius: 30px;
    padding: 9px 17px;
    font-size: 14px;
    line-height: 21px;
    margin-bottom: 12px;
  }
`