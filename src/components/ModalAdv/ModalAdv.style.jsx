import styled from 'styled-components'
import exit from './exit.png'
import exit_hover from './exit-hover.png'

export const ModalForm = styled.div`
  --modal-width: 600px;
  --modal-height: 800px;
  position: absolute;
  left: calc(50% - (var(--modal-width) / 2));
  top: calc(50% - (var(--modal-height) / 2));
  box-sizing: border-box;
  width: var(--modal-width);
  min-height: var(--modal-height);
  background-color: #ffffff;
  border-radius: 12px;
  padding: 22px 50px 50px 40px;
  display: flex;
  align-items: center;
  flex-direction: column;
  box-shadow: 3px 3px 10px 5px #d9d9d9;
  display: ${(props) => (props.modal === 'visible' ? 'flex' : 'none')};
  z-index: 2;
  opacity: 1;
  @media (max-width: 320px) {
    top: 0;
    --modal-width: 320px;
    padding: 0;
  }
`
export const ModalFormArea = styled.form`
  display: flex;  
  margin-top: 5px;
  width: 500px;
  min-height: 720px;
  flex-direction: column;
  align-items: start;
  background-color: #ffffff;
  @media (max-width: 320px) {
    width: 278px;
  }
}
`
export const ModalExit = styled.div`
  position: absolute;
  left: 520px;
  top: 38px;
  width: 43px;
  height: 43px;
  background-image: url(${exit});
  &:hover {
    background-image: url(${exit_hover});
  }
  cursor: pointer;
  @media (max-width: 320px) {
    display: none;
  }
`
export const ModalTitle = styled.div`
  height: 70px;
  min-width: 100%;
  background-color: #ffffff;
  font-size: 32px;
  font-weight: 500;
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  @media (max-width: 320px) {
    font-size: 24px;
    line-height: 29px;
    width: 278px;
  }
`
export const ModalLabel = styled.label`
  height: 30px;
  min-width: 100%;
  background-color: #ffffff;
  font-size: 16px;
  font-weight: 500;
  display: flex;
  align-items: center;
  margin-bottom: 5px;
  @media (max-width: 320px) {
    font-size: 14px;
    line-height: 21px;
    flex-direction: column;
    align-items: flex-start;
  }
`
export const ModalInput = styled.input`
  background-color: #ffffff;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 6px;
  padding: 16px 10px;
  font-size: 16px;
  margin-bottom: 20px;
  width: 100%;
  &::placeholder {
    color: #d9d9d9;
  }
  &:focus {
    outline: 2px solid #d9d9d9;
  }
  @media (max-width: 320px) {
    border-radius: 30px;
    font-size: 14px;
    line-height: 21px;
    padding: 9px 10px;
    &:focus {
      outline: 1px solid #009ee4;
    }
  }
`
export const ModalTextarea = styled.textarea`
  height: 200px;
  width: 100%;
  margin-bottom: 20px;
  background-color: #ffffff;
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-size: 16px;
  resize: none;
  border: 1px solid #d9d9d9;
  border-radius: 6px;
  padding: 16px 10px;
  line-height: 24px;
  &:focus {
    outline: 2px solid #d9d9d9;
  }
  &::placeholder {
    color: #d9d9d9;
  }
  @media (max-width: 320px) {
    border-radius: 30px;
    font-size: 14px;
    line-height: 21px;
    height: 107px;
    &:focus {
      outline: 1px solid #009ee4;
    }
  }
`
export const ModalPhotosContainer = styled.div`
  height: 90px;
  width: 490px;
  background-color: #ffffff;
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
  @media (max-width: 320px) {
    width: 278px;
    margin-top: 20px;
    overflow-x: scroll;
    height: 107px;
  }
`
export const ModalPhoto = styled.div`
  height: 90px;
  width: 90px;
  background-color: #afffff;
  background-color: #f0f0f0;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 320px) {
    flex-shrink: 0;
  }
`
export const ModalPriceContainer = styled.div`
  background-color: #ffffff;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 6px;
  padding: 16px 10px;
  font-size: 16px;
  display: flex;
  margin-bottom: 20px;
  width: 200px;
  outline: ${(props) => (props.focus ? '2px solid #d9d9d9' : '')};
  &::placeholder {
    color: #d9d9d9;
  }
  @media (max-width: 320px) {
    width: 278px;
    border-radius: 30px;
    padding: 9px 19px;
    outline: ${(props) => (props.focus ? '1px solid #009EE4' : '')};
  }
`
export const ModalPrice = styled.input`
  width: 155px;
  border: none;
  margin-right: 10px;
  &:focus {
    outline: none;
  }
  @media (max-width: 320px) {
    width: 218px;
  }
`
export const ModalButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  line-height: 24px;
  color: #ffffff;
  width: 181px;
  height: 50px;
  background-color: #009ee4;
  border-radius: 6px;
  border: 1px solid #009ee4;
  cursor: pointer;
  &:hover {
    background-color: #0080c1;
  }
  &:active {
    background-color: #009ee4;
  }
  &:disabled {
    background-color: #d9d9d9;
    border: 1px solid #d9d9d9;
  }
  @media (max-width: 320px) {
    width: 278px;
    height: 47px;
  }
`
export const ModalImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`
export const HeaderNav = styled.div`
  display: none;
  width: 100%;
  display: flex;
  align-items: center;
  gap: 10px;
  position: relative;
  @media (max-width: 320px) {
    display: flex;
    height: 55px;
    justify-content: start;
    padding-left: 17px;
    background-color: #009ee4;
    width: 320px;
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
export const HiddenSpan = styled.span`
  display: block;
  &:after {
    content: ' объявление';
  }
  @media (max-width: 320px) {
    &:after {
      content: '';
    }
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
