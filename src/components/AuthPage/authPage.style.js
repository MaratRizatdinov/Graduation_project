import { styled, css } from 'styled-components'

export const ButtonStyle = css`
  width: 100%;
  height: 52px;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  line-height: 24px;
  cursor: pointer;
  @media (max-width: 320px) {
    width: 278px;
    height: 46px;
    font-size: 16px;
  }
`

export const AuthContainer = styled.div`
  max-width: 100%;
  height: 100%;
  box-sizing: border-box;
  background-color: #f1f1f1;
`
export const ModalForm = styled.div`
  --modal-width: 366px;
  --modal-height: ${(props) =>
    props.$isLoginMode === true ? '439px' : '647px'};
  position: absolute;
  left: calc(50% - (var(--modal-width) / 2));
  top: calc(50% - (var(--modal-height) / 2));
  box-sizing: border-box;
  width: var(--modal-width);
  min-height: var(--modal-height);
  background-color: #ffffff;
  border-radius: 12px;
  padding: 43px 47px 47px 40px;
  display: flex;
  align-items: center;
  flex-direction: column;
  box-shadow: 3px 3px 10px 5px #d9d9d9;
  @media (max-width: 320px) {
    --modal-width: 320px;
    padding: 0px;
    border-radius: 0;
    --modal-height: ${(props) =>
      props.$isLoginMode === true ? '568px' : '633px'};

    // box-shadow: none;
  }
`

export const EnterButton = styled.button`
  ${ButtonStyle}
  background-color: #009ee4;
  color: #ffffff;
  margin-top: ${(props) => (props.$isLoginMode === true ? '60px' : '20px')};
  margin-bottom: ${(props) => (props.$isLoginMode === true ? '20px' : '0px')};
  border: none;
  &:hover {
    background-color: #0080c1;
  }
  &:active {
    background-color: #009ee4;
  }
  &:disabled {
    background-color: #d9d9d9;
  }
  @media (max-width: 320px) {
    margin-top: ${(props) => (props.$isLoginMode === true ? '40px' : '35px')};
    margin-bottom: ${(props) =>
      props.$isLoginMode === true ? '10px' : '43px'};
  }
`
export const SignupButton = styled.button`
  ${ButtonStyle};
  background-color: transparent;
  color: #000000;
  border: 1px solid #d0cece;
  &:hover {
    background-color: #f4f5f6;
  }
  &:active {
    background-color: #d9d9d9;
  }
  @media (max-width: 320px) {
    margin-bottom: ${(props) =>
      props.$isLoginMode === true ? '115px' : '30px'};
  }
`
export const ErrorSpan = styled.span`
  font-size: 14px;
  color: tomato;
  position: absolute;
  left: 40px;
  top: ${(props) => (props.$isLoginMode === true ? '250px' : '515px')};
  @media (max-width: 320px) {
    top: ${(props) => (props.$isLoginMode === true ? '260px' : '467px')};
    left: 25px;
  }
`
export const ModalHeader = styled.div`
  display: none;
  width: 320px;
  height: 55px;
  background-color: #009ee4;
  padding: 11px 17px;
  margin-bottom: 40px;

  @media (max-width: 320px) {
    display: block;
  }
`
export const ModalSmallLogo = styled.img`
  width: 32px;
  height: 32px;
`
